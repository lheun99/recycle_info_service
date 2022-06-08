const userRouter = require("express").Router();
const userService = require("../services/userService");
const { body, validationResult } = require("express-validator");

userRouter.post(
    "/register",
    body("email").isEmail().withMessage("이메일 형식이 올바르지 않습니다."),
    body("password")
        .isLength({ min: 8, max: 16 })
        .withMessage("8 ~ 16자리 비밀번호를 입력해주세요"),
    (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                throw new Error(errors.errors[0].msg);
            }

            const { nickname, email, password } = req.body;

            const newUser = { nickname, email, password };

            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    }
);

module.exports = userRouter;
