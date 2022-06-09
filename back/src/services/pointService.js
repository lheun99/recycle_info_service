const Point = require("../models/funcs/Point");

const pointService = {
    addPoint: async ({ userId, route, point }) => {
        const newPoint = { userId, route, point };
        const createdNewPoint = await Point.create({ newPoint });
        return createdNewPoint;
    },

    getPoint: async ({ userId, route }) => {
        // 2022-06-08 17:17:21.831 +0900
        const today = new Date();
        return today;
    },
};
