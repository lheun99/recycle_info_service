const RecycleInfo = require("../models/funcs/RecycleInfo");

const searchService = {
  getInfoByText: async ({ text }) => {
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    // test() ㅡ 찾는 문자열이 들어있는지 확인
    if (regExp.test(text)) {
      text = text.replace(regExp, ""); // 찾은 특수 문자를 제거
    }
    text = text.replace(" ", "");

    const searchedDataList = await RecycleInfo.searchData({ text });

    return { message: "success", data: searchedDataList };
  },
};

module.exports = searchService;
