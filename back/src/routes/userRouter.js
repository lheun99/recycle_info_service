const userRouter = require("express").Router();
const userService = require("../services/userService");
const { body, validationResult } = require("express-validator");
const loginRequired = require("../middlewares/loginRequired");

userRouter.post(
    "/register",
    body("email").isEmail().withMessage("이메일 형식이 올바르지 않습니다."),
    body("password")
        .isLength({ min: 8, max: 16 })
        .withMessage("8 ~ 16자리 비밀번호를 입력해주세요"),
    async (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                throw new Error(errors.errors[0].msg);
            }

            const { nickname, email, password } = req.body;

            const newUser = await userService.addUser({
                nickname,
                email,
                password,
            });

            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    }
);

userRouter.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await userService.getUser({ email, password });

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
});

module.exports = userRouter;
