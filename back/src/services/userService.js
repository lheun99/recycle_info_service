const User = require("../models/funcs/User");
const bcrypt = require("bcrypt");

const userService = {
    addUser: async ({ nickname, email, password }) => {
        const user = await User.findByEmail({ email });

        if (user) {
            throw new Error(
                "이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요."
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = { nickname, email, password: hashedPassword };
        console.log(newUser);

        const createdNewUser = await User.create({ newUser });
        return createdNewUser;
    },

    getUser: async ({ id }) => {
        const user = await User.findById({ id });
        return user;
    },
};

module.exports = userService;
