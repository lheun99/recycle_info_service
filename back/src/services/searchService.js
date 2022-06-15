const RecycleInfo = require("../models/funcs/RecycleInfo");

const searchService = {
  getInfoByText: async ({ text }) => {
    const searchedData = await RecycleInfo.searchData({ text });

    return { message: "success", data: searchedData };
  },
};

module.exports = searchService;
