import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import QuizResult from "./QuizResult";
import Image from "next/image";
import QuestionMark from "../../public/images/question_mark.png";
import PointCoin from "../../public/images/point.coin.png";
import styled from "styled-components";
import { styled as materialStyled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { get } from "../../api";

type QuizType = {
    question: string,
    multiples : [],
    answer: string,
    image: Boolean,
}

const Quiz = () => {
    const router = useRouter();
    const [quiz, setQuiz] = useState<QuizType>({
        question: "",
        multiples: [],
        answer: "",
        image: false,
    });
    const [open, setOpen] = useState<Boolean>(false);
    const [answer, setAnswer] = useState<Boolean>(false);
    const [userAnswer, setUserAnswer] = useState<string>("");
    const openClickHandler = () => setOpen(!open)
    
    const answerClickHandler = (userAnswer : string) : void => {
        setAnswer(!answer);
        setUserAnswer(userAnswer);
    }

    const getQuizData = async () => {
        try {
            await get("quizs").then((res) => {
                // console.log(res.data)
                setQuiz(res.data.data)
            })
        } catch (err) {
            console.log("errer message: ", err);
        }
    };

    const pointClickHandler = () => {
        
    }

    useEffect(() => {
        getQuizData();
    }, [])

    return (
        <Wrapper>
            <h1>퀴즈 풀고 포인트 받자!</h1>
            <Contents>
                {"매일 매일 색다른 오늘의 퀴즈에 도전하세요."}
            </Contents>
            <Form>
                <Title>오늘의 퀴즈</Title>
                <Container>
                    {
                        open ? (
                            answer ? (
                                <ResultWrapper>
                                    {
                                    quiz.answer === userAnswer ? 
                                        <QuizResult result={"정답입니다!"} quiz={quiz}/>
                                        : <QuizResult result={"틀렸습니다!"} quiz={quiz}/>
                                    }
                                    <div>
                                        <NavButton onClick={() => router.push('/')}>홈으로</NavButton>
                                        <NavButton onClick={pointClickHandler}>
                                            <Image
                                                src={PointCoin}
                                                alt="point-coin"
                                                width={35}
                                                height={35}
                                            />
                                            <p>포인트 적립</p>
                                        </NavButton>
                                    </div>
                                </ResultWrapper>
                            ) : (
                                <InnerForm>
                                    <ImageWrapper>
                                        <Image
                                            src={QuestionMark}
                                            alt="question-mark"
                                            width={40}
                                            height={40}
                                        />
                                    </ImageWrapper>
                                    <Question>{quiz.question}</Question>
                                    <AnswerWrapper>
                                        <Answer>
                                        { 
                                            quiz.image ? (
                                                <AnswerImageWrapper> 
                                                {
                                                    quiz.multiples.map((value, index) => (
                                                        <AnswerImageButton 
                                                            key={index} 
                                                            src={value}
                                                            alt="image"
                                                            onClick={() => answerClickHandler(value)} />
                                                    ))
                                                }
                                                </AnswerImageWrapper>
                                            ) : (
                                                quiz.multiples.map((value, index) => (
                                                    <AnswerButton key={index} onClick={() => answerClickHandler(value)}>{value}</AnswerButton>
                                                ))
                                            )
                                        }
                                        </Answer>
                                    </AnswerWrapper>
                                </InnerForm>
                            )
                        ) : (
                            <ChallengeButton onClick={openClickHandler}>도전하기</ChallengeButton>
                        )
                    }
                </Container>
            </Form>
        </Wrapper>
    )
}

export default Quiz;


const Wrapper = styled.div`
    width: 100%;
    height: 790px;
    background-color: var(--gray);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 40px;
`;

const Contents = styled.p`
    white-space: pre-wrap;
    text-align: center;
`;

const Form = styled.div`
    width: 600px;
    height: 470px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
`;

const Title = styled.h2`
    width: 100%;
    height: 70px;
    margin: 0;
    padding-top: 15px;
    background-color: var(--green);
    text-align: center;
    border-radius: 20px 20px 0 0;
`;

const Container = styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InnerForm = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`;

const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

const Question = styled.div`
    width: 100%;
    text-align: center;
    margin: 20px 0;
`;

const AnswerWrapper = styled.div`
    width: 100%;
    height: 240px;
`;

const Answer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ResultWrapper = styled.div`
    width: 80%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const AnswerImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const AnswerImageButton = styled.img`
    width: 100px;
    height: 100px;
    margin: 6px;
    padding: 14px;
    border-radius: 10px;
    background-color: var(--green);
    cursor: pointer;
`;

const ChallengeButton = materialStyled(Button)(
    () => (
        {
            width: '90%',
            height: '90%',
            backgroundColor: 'white',
            '&:hover': {
                backgroundColor: 'var(--deepgray)',
            }
        }
    ));

const AnswerButton = materialStyled(Button)(
    () => (
        {
            width: '500px',
            height: '45px',
            backgroundColor: 'var(--green)',
            margin: '6px 0',
            padding: '14px',
            borderRadius: '10px',
            color: 'black',
            '&:hover': {
                backgroundColor: 'var(--deepgreen)',
                color: 'white',
            }
        }
    ));

const NavButton = materialStyled(Button)(
    () => (
        {
            width: '150px',
            height: '50px',
            borderRadius: '10px',
            margin: '0 20px',
            backgroundColor: 'var(--gray)',
            color: 'black',
            '&:hover': {
                backgroundColor: 'var(--deepgray)',
                color: 'white',
            }
        }
    ));