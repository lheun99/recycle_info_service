const db = require("../index.js");
const pointModel = db.point;
const Op = db.Sequelize.Op;
const sequelize = db.sequelize;

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

    findAllById: async ({ user_id }) => {
        const points = await pointModel.findAll({ where: { user_id } });
        return points;
    },

    getRankerIds: async () => {
        const ids = await sequelize.query(
            "SELECT user_id, SUM(point) OVER (PARTITION BY user_id) SUM_POINT FROM points"
        );
        return ids;
    },
};

module.exports = Point;
