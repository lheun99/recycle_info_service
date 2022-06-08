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

    update: async ({ id, toUpdate }) => {
        const count = await userModel.update(toUpdate, { where: { id } });
        return count;
    },
};

module.exports = User;
