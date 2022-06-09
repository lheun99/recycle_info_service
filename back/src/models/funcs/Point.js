const db = require("../index.js");
const pointModel = db.point;
const Op = db.Sequelize.Op;

const Point = {
    create: async ({ newPoint }) => {
        const createdNewPoint = pointModel.create(newPoint, {
            field: ["userId", "route", "point"],
        });

        return createdNewPoint;
    },

    findByFilter: async ({ userId, route, today }) => {
        const point = await pointModel.findOne({
            where: { userId, route, createdAt: { [Op.gt]: today } },
        });
        return point;
    },

    findAllById: async ({ userId }) => {
        const points = await pointModel.findAll({ where: { userId } });
        return points;
    },
};
