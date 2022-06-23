import quizRouter from "express";
import quizService from "../services/quizService.js";

quizRouter.Router();
quizRouter.get("/", async (req, res, next) => {
  try {
    const quiz = await quizService.getQuiz();

    res.status(200).json(quiz);
  } catch (error) {
    next(error);
  }
});

export default quizRouter;
