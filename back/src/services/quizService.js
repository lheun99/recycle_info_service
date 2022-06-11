const Quiz = require("../models/funcs/Quiz");
const setUtil = require("../utils/setUtil.js");

const quizService = {
    getQuiz: async () => {
        const count = await Quiz.getCount();

        const number = Math.ceil(Math.random() * count);

        const quiz = await Quiz.findById(number);

        const newMultiples = quiz.multiples.split("^");
        quiz.multiples = setUtil.shuffle(newMultiples);

        return { message: "success", data: quiz };
    },
};

module.exports = quizService;
