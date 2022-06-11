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

    getRankers: async () => {
        const rankerPoints = await sequelize.query(
            "SELECT DISTINCT points.user_id, nickname, SUM(point) OVER (PARTITION BY points.user_id) SUM_POINT FROM points INNER JOIN users ON points.user_id=users.user_id ORDER BY sum_point DESC LIMIT 3"
        );
        return rankerPoints[0];
    },
};

module.exports = Point;
