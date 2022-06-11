const db = require("../index.js");
const pointModel = db.point;
const Op = db.Sequelize.Op;

const Point = {
    create: async ({ newPoint }) => {
        const createdNewPoint = await pointModel.create(newPoint, {
            field: ["user_id", "route", "point", "raised_at"],
        });

        return createdNewPoint;
    },

    findByFilter: async ({ user_id, route, today }) => {
        const point = await pointModel.findOne({
            where: { user_id, route, raised_at: { [Op.gt]: today } },
        });
        return point;
    },

    findAllById: async ({ userId }) => {
        const points = await pointModel.findAll({ where: { userId } });
        return points;
    },
};

module.exports = Point;
