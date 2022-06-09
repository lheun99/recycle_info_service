const db = require("../index.js");
const pointModel = db.point;

const Point = {
    create: async ({ newPoint }) => {
        const createdNewPoint = pointModel.create(newPoint, {
            field: ["userId", "route", "point"],
        });

        return createdNewPoint;
    },
};
