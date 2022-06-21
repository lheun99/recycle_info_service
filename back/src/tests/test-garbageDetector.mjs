import assert from "assert/strict";

import { GarbageDetector } from "../utils/od/garbageDetector.mjs";

// 1. 말도 안되는 경로를 집어넣고 에러를 제대로 내는지 봅니다.
try {
  const gd = GarbageDetector(`ham/jam/spam.eggs`);
  console.warn(`FAIL: didn't error out`);
} catch (error) {
  console.info(`Don't panic, everything is under control`);
  console.info(error);
}
