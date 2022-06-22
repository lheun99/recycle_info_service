import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import lottie from "lottie-web";
// import animationData from "../../public/trueEffect2.json";

type QuizType = {
    question: String,
    multiples : [],
    answer: string,
    image: Boolean,
}

type QuizResultProps = {
    result: string;
    quiz: QuizType;
}

const QuizResult = ({ result, quiz } : QuizResultProps) => {
    const container = useRef();

    // useEffect(() => {
    //     lottie.loadAnimation({
    //         container: container.current, 
    //         renderer: 'svg',
    //         loop: false,
    //         autoplay: true,
    //         animationData: animationData
    //     });
    // }, [])

    return (
        <ResultForm>
            <ResultEffect ref={container} />
            <AnswerCheck>{result}</AnswerCheck>
            <AnswerText>정답은 "{
                quiz.image ? (
                    <AnswerImageButton 
                        src={quiz.answer}
                        alt="image"/>
                ) : (
                    quiz.answer
                )
            }" 입니다.
            </AnswerText>
        </ResultForm>   
    )
}

export default QuizResult;


const ResultForm = styled.div`
    width: 100%;
    height: 100%;
`;

const ResultEffect = styled.div`
    position: absolute;
`;

const AnswerCheck = styled.div`
    width: 100%;
    height: 70px;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
`;

const AnswerText = styled.div`
    width: 100%;
    height: 100px;
    text-align: center;
    font-size: 1.2rem;
    word-break: break-all;
`;

const AnswerImageButton = styled.img`
    width: 100px;
    height: 100px;
    margin: 6px;
    padding: 14px;
    border-radius: 10px;
    background-color: var(--green);
`;