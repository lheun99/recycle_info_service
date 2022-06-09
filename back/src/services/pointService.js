const pointService = {
    addPoint: async ({ userId, route, point }) => {
        const newPoint = { userId, route, point };
        const createdNewPoint = await Point.create({ newPoint });
        return createdNewPoint;
    },
};
