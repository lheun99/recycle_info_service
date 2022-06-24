import db from "../index.js";
import QueryTypes from "sequelize";
const recycleInfoModel = db.recycleInfo;
const recycleCategoryModel = db.recycleCategory;
const Sequelize = db.Sequelize;
const sequelize = db.sequelize;

import { GarbageDetector, MODELDIR } from "../../utils/od/garbageDetector.mjs";
const detector = new GarbageDetector(MODELDIR);
await detector.init().then(() => {
  console.log(detector.initDone);
});

const RecycleInfo = {
  //POST /recycleInfo
  //인공지능 파트로 이미지 정보 전달
  findRecycleCode: async ({ imgBuffer }) => {
    const result = await detector.guess(imgBuffer);
    return result;
  },

  //POST /recycleInfo
  //분석 결과에 따른 분리배출 정보
  findInfoByCode: async ({ code }) => {
    const infos = await sequelize.query(
      `SELECT recycle_categories.category, recycle_infos.details, recycle_infos.info_img
      FROM recycle_infos
      INNER JOIN recycle_categories
      ON recycle_infos.code=recycle_categories.code
      WHERE recycle_infos.code=$code`,
      {
        bind: { code: code },
        type: QueryTypes.SELECT,
      }
    );

    return infos[0];
  },

  //GET /search
  //분리배출 정보 검색
  searchData: async ({ text }) => {
    const searchedData = await sequelize.query(
      `SELECT recycle_categories.category, recycle_infos.details, recycle_infos.info_img
      FROM recycle_infos
      INNER JOIN recycle_categories 
      ON recycle_infos.code=recycle_categories.code
      WHERE (details LIKE '%'||$text||'%') OR (related_item LIKE '%'||$text||'%')`,
      {
        bind: { text: text },
        type: QueryTypes.SELECT,
      }
    );

    return searchedData[0];
  },
};

export default RecycleInfo;
