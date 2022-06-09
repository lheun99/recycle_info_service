const quizService = {
    getQuiz: async () => {
        const count = await Quiz.getCount();

        const number = Math.ceil(Math.random() * count);

        const quiz = await Quiz.findById(number);

        return quiz;
    },
};
