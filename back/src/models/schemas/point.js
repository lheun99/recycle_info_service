module.exports = (sequelize, Sequelize) => {
    const Point = sequelize.define("point", {
        userId: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        point: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },
        route: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });

    return Point;
};
