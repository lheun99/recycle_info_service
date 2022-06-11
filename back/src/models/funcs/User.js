const db = require("../index.js");
const userModel = db.user;
const Sequelize = db.Sequelize;
const sequelize = db.sequelize;

const User = {
    create: async ({ newUser }) => {
        const createdNewUser = await userModel.create(newUser, {
            fields: [
                "user_id",
                "nickname",
                "email",
                "password",
                "register_date",
            ],
        });

        return createdNewUser;
    },

    findById: async ({ user_id }) => {
        const user = await userModel.findOne({ where: { user_id } });
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

    // findRank: async ({ id }) => {
    //     const rank = await userModel.findOne({
    //         attributes: [
    //             [
    //                 id,
    //                 Sequelize.literal(
    //                     "(RANK() OVER (ORDER BY totalPoint DESC))"
    //                 ),
    //                 "rank",
    //             ],
    //         ],
    //         where: { id },
    //     });
    //     console.log(rank);
    //     return rank;
    // },

    update: async ({ user_id, toUpdate }) => {
        const count = await userModel.update(toUpdate, { where: { user_id } });
        return count;
    },

    delete: async ({ id }) => {
        await userModel.destroy({ where: { id } });
    },
};

module.exports = User;
