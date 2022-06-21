import assert from "assert/strict";
import path from "path";
import url from "url";

import { AppError } from "../utils/errors.js";
import { GarbageDetector } from "../utils/od/garbageDetector.mjs";

// 1. 말도 안되는 경로를 집어넣고 에러를 제대로 내는지 봅니다.
console.info(`Testing sanity check functionality\n\n`);
try {
  new GarbageDetector(`ham/jam/spam.eggs`);
  console.warn(`FAIL: didn't error out`);
} catch (error) {
  if (error instanceof AppError) {
    console.info(`Don't panic, everything is under control`);
  }
  console.info(error);
}
console.log(`\n\n`);

// 2. 모델을 만듭니다.
const modelPath = path.resolve(
  path.dirname(url.fileURLToPath(import.meta.url)),
  `..`,
  //   `utils/od/gdmodel/weights/last_web_model/model.json`,
  `utils/od/gdmodel/weights/last_saved_model/saved_model.pb`
);
console.info(`model's absolute path is "${modelPath}"`);
const gd = new GarbageDetector(modelPath);
console.log(gd);
console.log(gd.modelPath);
