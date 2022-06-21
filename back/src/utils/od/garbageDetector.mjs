// import { Buffer } from "buffer";
import * as fs from "fs";
import path from "path";

import tf, { mod } from "@tensorflow/tfjs-node";

import { AppError, RequestError } from "../errors.js";
import * as status from "../status.js";

const CLASSES_KO = [
  "종이류",
  "플라스틱류",
  "유리병류",
  "캔류",
  "고철류",
  "의류",
  "전자제품",
  "스티로폼류",
  "도기류",
  "비닐류",
  "가구류",
  "자전거",
  "형광등",
  "페트병류",
  "나무류",
];

const CLASSES_EN = [
  "paper",
  "plastic goods",
  "glass bottle",
  "can",
  "scrap metal",
  "clothing",
  "electric",
  "styrofoam",
  "ceramic",
  "plastic bag",
  "furniture",
  "bycycle",
  "lamp",
  "PET bottle",
  "wood",
];

const CLASSNAMES = { en: CLASSES_EN, ko: CLASSES_KO };

/** 인공지능이 찾은 물건 하나를 표현하는 자료형입니다.
 *
 * ## 예제
 * ```js
 * const d = new Detection(11, 0.8, [0.2, 0.4, 0.6, 0.8], [640, 480])
 *
 * d.classId      // 11
 * d.confidence   // 0.8
 * d.imageWidth   // 640
 * d.imageHeight  // 480
 * d.name('ko')   // '자전거'
 * d.name('en')   // 'bicycle'
 * d.xyxy()       // [128, 256, 288, 384]
 * d.xywh()       // [208, 320, 160, 128]
 * ```
 *
 * ## 프로퍼티
 *
 * - `Detection.classId`
 * - `Detection.confidence`
 * - `Detection.imageWidth`, `Detection.imageHeight`
 *
 * ## 메소드
 *
 * - `Detection.name(lang)` - 물체의 분류 이름을 반환합니다.
 * - `Detection.xyxy(dim = [this.imageWidth, this.imageHeight])` -
 *   `xyxy` 형식으로 바운딩 박스 좌표를 반환합니다.
 * - `Detection.xywh(dim = [this.imageWidth, this.imageHeight])` -
 *   `xywh` 형식으로 바운딩 박스 좌표를 반환합니다.
 */
class Detection {
  /**
   * @arg {number} classId - 물체가 속한 클래스의 인덱스 값입니다.
   * @arg {number} confidence - 인공지능이 정답을 확신하는 정도입니다.
   * @arg {[number, number, number, number]} xyxy -
   *  바운딩 박스의 왼쪽 위, 오른쪽 아래 상대 좌표값의 배열입니다.
   * @arg {[number, number]} dim - 이미지의 가로, 세로 치수의 배열입니다.
   */
  constructor(classId, confidence, xyxy, dim = [1.0, 1.0]) {
    this.classId = classId;
    this.confidence = confidence;
    this.imageWidth = dim[0];
    this.imageHeight = dim[1];
    this._xyxy = xyxy;
  }

  /** 물체의 분류 이름을 반환합니다.
   *
   * @arg {string} lang - `'en'`, `'ko'` 둘 중 하나입니다.
   *  둘 중 하나가 아닌 값이면 `AppError[ValueError]`를 던집니다.
   * @return {string} name - 분류 이름을 반환합니다.
   */
  name(lang) {
    if (lang in CLASSNAMES) {
      return CLASSNAMES[lang][this.classId];
    } else {
      throw new AppError(
        {
          name: `ValueError`,
          operational: true,
          detail: {},
        },
        `Unknown language "${lang}"`
      );
    }
  }

  /** `xyxy` 형식으로 바운딩 박스 좌표를 반환합니다.
   *
   * @arg {[number, number]} dim - 이미지의 가로, 세로 치수의 배열입니다.
   *  - 기본값은 원본 이미지의 치수입니다.
   * @return {[number, number, number, number]} xyxy
   *  - `dim` 값에 맞춰 계산한 `[ x1, y1, x2, y2]` 형식을 반환합니다.
   *  - 좌표값은 가까운 정수로 반올림합니다.
   */
  xyxy(dim = [this.imageWidth, this.imageHeight]) {
    const [width, height] = dim;
    return [
      Math.round(this._xyxy[0] * width),
      Math.round(this._xyxy[1] * height),
      Math.round(this._xyxy[2] * width),
      Math.round(this._xyxy[3] * height),
    ];
  }

  /** `xywh` 형식으로 바운딩 박스 좌표를 반환합니다.
   *
   * @arg {[number, number]} dim - 이미지의 가로, 세로 치수의 배열입니다.
   *  - 기본값은 원본 이미지의 치수입니다.
   * @return {[number, number, number, number]} xyxy
   *  - `dim` 값에 맞춰 계산한 `[ xc, yc, w, h]` 형식을 반환합니다.
   *    `xc`, `yc`는 각각 바운딩 박스 중앙 지점의 좌표입니다.
   *  - 좌표값은 가까운 정수로 반올림합니다.
   */
  xywh(dim = [this.imageWidth, this.imageHeight]) {
    if (!this._xywh) {
      this._xywh = [
        (this._xyxy[0] + this._xyxy[2]) / 2.0,
        (this._xyxy[1] + this._xyxy[3]) / 2.0,
        this._xyxy[2] + this._xyxy[0],
        this._xyxy[3] + this._xyxy[1],
      ];
    }
    const [width, height] = dim;
    return [
      Math.round(this._xywh[0] * width),
      Math.round(this._xywh[1] * height),
      Math.round(this._xywh[2] * width),
      Math.round(this._xywh[3] * height),
    ];
  }
}

/** 쓰레기 분류 인공지능의 사용 인터페이스입니다. */
class GarbageDetector {
  /**
   * @arg {string} modelPath - 모델 경로입니다.
   *  - 경로가 잘못되는 등 읽을 수 없으면 `AppError[OSError]`를 던집니다.
   */
  constructor(modelPath) {
    try {
      fs.accessSync(modelPath, fs.constants.R_OK);
    } catch {
      const stats = fs.statSync(modelPath, { throwIfNoEntry: false });
      throw new AppError(
        {
          name: "OSError",
          operational: true,
          detail: stats ?? {},
        },
        `"${path.resolve(modelPath)}" file not readable`
      );
    }

    this.modelPath = modelPath;
    this.model = null;
  }

  /** 모델을 준비합니다. */
  async init() {
    const stats = fs.statSync(this.modelPath);
    if (stats.isFile()) {
      // web model 포맷입니다.
      const handler = tf.io.fileSystem(modelPath);
      this.model = await tf.loadGraphModel(handler);
    } else {
      // saved model 포맷입니다.
      this.model = await tf.node.loadSavedModel(this.modelPath);
    }
  }

  /** 이미지에서 쓰레기를 찾아 분류합니다.
   *
   * @arg {Buffer} image - 해독되지 않은 이미지 버퍼입니다.
   *  - bmp, gif, jpeg, png 포맷을 해독 가능합니다.
   *    다른 포맷은 해독해서 넣으면 가능합니다.
   */
  async guess(image) {
    let image_;
    try {
      image_ = tf.node.decodeImage(image);
    } catch (error) {
      throw new RequestError(
        {
          name: `ImageDecodeError`,
          detail: { message: error.message },
        },
        `Image format is unknown`
      );
    }
    const [height, width] = image_.shape;

    const input = tf.image
      .resizeBilinear(image_, [320, 320])
      .div(255.0)
      .expandDims(0);

    const result = [];
    const raw = this.model.predict(input);
    let [boxes, confidences, classIds, numDetections] = raw;
    numDetections = numDetections.dataSync();
    classIds = classIds.dataSync().slice(0, numDetections);
    confidences = confidences.dataSync().slice(0, numDetections);
    boxes = boxes.dataSync().slice(0, numDetections * 4);
    console.log(`
      numDetections: ${numDetections},
      classIds: ${classIds},
      confidences: ${confidences},
      boxes: ${boxes}
    `);
  }

  /** 이미지에서 쓰레기를 찾아 가장 자신있는 분류의 목록을 반환합니다. */
  guessBest(image) {}
}

export { GarbageDetector };
