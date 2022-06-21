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

const modelPath = path.resolve(
  path.dirname(url.fileURLToPath(import.meta.url)),
  `..`,
  `utils/od/gdmodel/weights`
);
console.info(`model's absolute path is "${modelPath}"`);
