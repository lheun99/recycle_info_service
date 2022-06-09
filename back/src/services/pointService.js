const Point = require("../models/funcs/Point");

const pointService = {
    addPoint: async ({ userId, route, point }) => {
        const newPoint = { userId, route, point };
        const createdNewPoint = await Point.create({ newPoint });
        return { message: "success", data: createdNewPoint };
    },

    getPoint: async ({ userId, route }) => {
        // 2022-06-08 17:17:21.831 +0900
        const today = "2022-06-08T15:00:00.000Z";
        let point = await Point.findByFilter({ userId, route, today });

        if (!point) {
            point = { point: false };
        } else {
            point = { point: point.point };
        }
        return { message: "success", data: point };
    },

    getPoints: async ({ userId }) => {
        const points = await Point.findAllById({ userId });
        return { message: "success", data: points };
    },
};

module.exports = pointService;
