const RecycleInfo = require("../models/funcs/RecycleInfo");

const searchService = {
  getInfoByText: async ({ text }) => {
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    // test() ㅡ 찾는 문자열이 들어있는지 확인
    if (regExp.test(text)) {
      text = text.replace(regExp, ""); // 찾은 특수 문자를 제거
    }
    text = text.replace(" ", "");

    const searchedInfo = await RecycleInfo.searchData({ text });

    const searchedData = searchedInfo.map((info) => ({
      category: info.category,
      details: info.details,
      infoImg: info.info_img,
    }));

    return { message: "success", data: searchedData };
  },
};

module.exports = searchService;
