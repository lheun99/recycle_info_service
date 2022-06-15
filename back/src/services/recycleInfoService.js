const RecycleInfo = require("../models/funcs/RecycleInfo");

const recycleInfoService = {
  analysisImg: async ({ encoded }) => {
    //인공지능이 이미지 분석 진행
    const code = await RecycleInfo.findRecycleCode({ encoded });
    //분석 결과에 따른 분리배출 정보 결과
    const info = await RecycleInfo.findInfoByCode({ code });
    return { message: "success", data: info };
  },
};

module.exports = recycleInfoService;
