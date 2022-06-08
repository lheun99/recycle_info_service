const db = require("../index.js");
const userModel = db.user;

const User = {
    create: async ({ newUser }) => {
        const createdNewUser = await userModel.create(newUser, {
            fields: ["nickname", "email", "password"],
        });

        return createdNewUser;
    },

    findById: async ({ id }) => {
        const user = await userModel.findOne({ where: { id } });
        return user;
    },

    findByEmail: async ({ email }) => {
        const user = await userModel.findOne({ where: { email } });
        return user;
    },

    findRankers: async () => {
        const rankers = await userModel.findAll({
            attributes: ["nickname", "totalPoint"],
            order: [["totalPoint", "DESC"]],
            limit: 3,
        });
        return rankers;
    },

    findRank: async ({ id }) => {
        const rank = await userModel.findOne({
            attributes: [
                [
                    Sequelize.literal("(RANK() OVER (ORDER BY rating DESC))"),
                    "rank",
                ],
            ],
            where: { id },
        });
        return rank;
    },

    update: async ({ id, toUpdate }) => {
        const count = await userModel.update(toUpdate, { where: { id } });
        return count;
    },

    delete: async ({ id }) => {
        await userModel.destroy({ where: { id } });
    },
};

module.exports = User;
