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

class Inference {}

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

    console.log(`image shape: ${image_.shape}`);
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
