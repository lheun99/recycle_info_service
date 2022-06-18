const RecycleInfo = require("../models/funcs/RecycleInfo");

const recycleInfoService = {
  analysisImg: async ({ encoded }) => {
    // //인공지능이 이미지 분석 진행
    // const code = await RecycleInfo.findRecycleCode({ encoded });
    // //분석 결과에 따른 분리배출 정보 결과
    // const infos = await RecycleInfo.findInfoByCode({ code });

    // const category = infos[0].category;
    // const recycleInfo = [];
    // infos.map((info) =>
    //   recycleInfo.push({ details: info.details, info_img: info.info_img })
    // );

    const infos = {
      category: "종이류",
      recycleInfo: [
        {
          details: "신문지",
          info_img:
            "https://team9-cyberdyne.s3.ap-northeast-2.amazonaws.com/recycle_info/newspaper.png",
        },
        {
          details: "책자, 노트",
          info_img:
            "https://team9-cyberdyne.s3.ap-northeast-2.amazonaws.com/recycle_info/book_note.png",
        },
        {
          details: "상자류",
          info_img:
            "https://team9-cyberdyne.s3.ap-northeast-2.amazonaws.com/recycle_info/box.png",
        },
        {
          details: "종이컵",
          info_img:
            "https://team9-cyberdyne.s3.ap-northeast-2.amazonaws.com/recycle_info/paper_cup.png",
        },
        {
          details: "종이팩",
          info_img:
            "https://team9-cyberdyne.s3.ap-northeast-2.amazonaws.com/recycle_info/carton.png",
        },
      ],
    };
    return { message: "success", data: infos };
  },
};

module.exports = recycleInfoService;
