const authRouter = require("express").Router();

authRouter.get("/kakao", async (req, res, next) => {
    try {
        const code = req.query.code;
        console.log(code);
        res.status(200).json(code);
    } catch (error) {
        next(error);
    }
});

module.exports = authRouter;
