import assert from "assert/strict";
import * as fsp from "fs/promises";
import path from "path";
import url from "url";

import { AppError } from "../utils/errors.js";
import { GarbageDetector } from "../utils/od/garbageDetector.mjs";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

/** 테스트를 수행하고 성공 여부를 객체로 반환합니다. */
const main = async () => {
  const result = {};

  // 1. 말도 안되는 경로를 집어넣고 에러를 제대로 내는지 봅니다.
  console.info(`** Testing bailout functionality **\n`);
  try {
    assert.throws(
      () => {
        new GarbageDetector(`ham/jam/spam.eggs`);
      },
      AppError,
      `Failed to ignore ridiculous path`
    );
    result[`Bailout test`] = true;
  } catch (error) {
    result[`Bailout test`] = false;
    console.info(error);
  }
  console.log(`\n`);

  // 2. 모델을 만듭니다.
  console.info(`** Trying to load a valid model **\n`);
  let detector;
  try {
    const modelPath = path.resolve(
      __dirname,
      `..`,
      //   `utils/od/gdmodel/weights/last_web_model/model.json`,
      `utils/od/gdmodel/weights/last_saved_model`
    );
    console.info(`model's absolute path is "${modelPath}"`);
    detector = new GarbageDetector(modelPath);
    await detector.init();
    console.info(detector);
    console.log(`\n`);
    result[`Model loading test`] = true;
  } catch (error) {
    result[`Model loading test`] = false;
    return result;
  }

  // 이미지를 하나 넣어 봅니다.
  console.info(`** Inference i/o format test ** \n`);
  const image = await fsp.readFile(
    path.join(__dirname, `test-images`, `11-bicycle.jpg`)
  );
  const res = await detector.guess(image);
  console.info(res);
  console.log(
    res[0].classId,
    res[0].imageWidth,
    res[0].imageHeight,
    res[0].name("en"),
    res[0].name("ko"),
    res[0]._xyxy.length
  );
  assert(
    res[0].classId === 11 &&
      res[0].imageWidth === 320 &&
      res[0].imageHeight === 320 &&
      res[0].name("en") === "bicycle" &&
      res[0].name("ko") === "자전거" &&
      res[0]._xyxy.length === 4
  );

  return result;
};

main().then((res) => console.info(res));
