const quizeRouter = require("express").Router();

quizeRouter.get("/", async (req, res, next) => {
    try {
        const quiz = await quizService.getQuiz();

        res.status(200).json(quiz);
    } catch (error) {
        next(error);
    }
});
