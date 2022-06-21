import * as fs from "fs";
import path from "path";

import { AppError } from "../errors";

CLASSES_KO = [
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

CLASSES_EN = [
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
  constructor(modelPath) {
    if (!fs.accessSync(modelPath, fs.constants.R_OK)) {
      const stat = fs.statSync(modelPath, { throwIfNoEntry: false });
      throw new AppError(
        {
          name: "OSError",
          operational: true,
          detail: stat ?? {},
        },
        `"${path.resolve(modelPath)}" file not readable`
      );
    }
    this.modelPath = modelPath;
    this.model = tf.loadGraphModelSync(modelPath);
  }

  /** 이미지에서 쓰레기를 찾아 분류합니다. */
  guess(image) {}

  /** 이미지에서 쓰레기를 찾아 가장 자신있는 분류의 목록을 반환합니다. */
  guessBest(image) {}
}

module.exports = { GarbageDetector };
