import authRouter from "express";
import kakaoService from "../services/kakaoService";
import naverService from "../services/naverService";

authRouter.Router();
authRouter.get("/kakao", async (req, res, next) => {
  try {
    const code = req.query.code;

    const user = await kakaoService.getToken({ code });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

authRouter.get("/naver", async (req, res, next) => {
  try {
    const code = req.query.code;

    const user = await naverService.getToken({ code });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

export default authRouter;
