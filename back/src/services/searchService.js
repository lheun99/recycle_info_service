const RecycleInfo = require("../models/funcs/RecycleInfo");

const searchService = {
  getInfoByText: async ({ text }) => {
    //const searchedDataList = await RecycleInfo.searchData({ text });
    const searchedDataList = [
      {
        category: "종이류",
        details: "상자류",
        info_img:
          "https://team9-cyberdyne.s3.ap-northeast-2.amazonaws.com/recycle_info/box.png",
      },
      {
        category: "종이류",
        details: "종이컵",
        info_img:
          "https://team9-cyberdyne.s3.ap-northeast-2.amazonaws.com/recycle_info/paper_cup.png",
      },
    ];
    return { message: "success", data: searchedDataList };
  },
};

module.exports = searchService;
