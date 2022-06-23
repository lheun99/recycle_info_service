const authRouter = require("express").Router();
const kakaoService = require("../services/kakaoService");

authRouter.get("/kakao", async (req, res, next) => {
    try {
        const code = req.query.code.slice(0, -1);

        const user = await kakaoService.getToken({ code });
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
});

authRouter.get("/naver", async (req, res, next) => {
    try {
        const code = req.query.code.slice(0, -1);
        console.log(code);
        res.status(204).end();
    } catch (error) {
        next(error);
    }
});

module.exports = authRouter;
