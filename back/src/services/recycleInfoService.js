import RecycleInfo from "../models/funcs/RecycleInfo.js";

const recycleInfoService = {
  //POST /recycle-info
  analysisImg: async ({ imgBuffer }) => {
    //인공지능 파트로 이미지 정보 전달, 분석 결과
    const results = await RecycleInfo.findRecycleCode({ imgBuffer });

    if (results.length === 0) {
      return { message: "success", data: { typeCount: 0, infos: [] } };
    }

    const analysisImgResult = results.map((result) => ({
      code: result.classId,
      confidence: (result.confidence * 100).toFixed(2),
      xyxy: result._xyxy,
    }));

    //recycle_category_code에 따른 분리배출 정보
    //전달 데이터 형태 변경
    const infos = await Promise.all(
      analysisImgResult.map(async (result) => {
        const info = await RecycleInfo.findInfoByCode({ code: result.code });

        const category = info[0].category;
        result.category = category;

        const infoPageCount = info.length;
        result.infoPageCount = infoPageCount;

        const recycleInfo = info.map((info) => ({
          details: info.details,
          infoImg: info.info_img,
        }));
        result.recycleInfo = recycleInfo;

        return result;
      })
    );

    //안내될 정보 페이지 수
    const typeCount = infos.length;

    return { message: "success", data: { typeCount, infos } };
  },

  //GET /recycle-info/?code
  getInfoByCode: async ({ code }) => {
    //코드 타입 확인 (number)
    if (!typeof code === "number") {
      const errorMessage = "잘못된 코드 입력";
      return { errorMessage };
    }

    //검색 결과
    const infos = await RecycleInfo.findInfoByCode({ code });

    //안내될 정보 페이지 수
    const page = infos.length;
    //전달 데이터 형태 변경
    const category = infos[0].category;
    const recycleInfo = infos.map((info) => ({
      details: info.details,
      infoImg: info.info_img,
    }));

    return { message: "success", data: { page, category, recycleInfo } };
  },
};

export default recycleInfoService;
