const pointRouter = require("express").Router();

pointRouter.post("/", async (req, res, next) => {
    try {
        const userId = req.currentUserId;
        const route = req.body.route;

        const newPoint = await pointService.addPoint({ userId, route });

        res.status(201).json(newPoint);
    } catch (error) {
        next(error);
    }
});
