import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import nextArrow from "../../public/images/next.arrow.png";
import pointCoin from "../../public/images/point.coin.png";
import infoData from "./infoData.json";
import styled from "styled-components";
import carouselStyles from "../../styles/Carousel.module.css";

const subjects = infoData.map((info) => info.subject);

const InfoCarousel = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const router = useRouter(); // 페이지 이동을 위해 useRouter 적용

    const nextSlide = () => {
        if (slideIndex === infoData.length) {
            return;
        }
        setSlideIndex(slideIndex + 1);
    };

    const prevSlide = () => {
        if (slideIndex === 1) {
            return;
        }
        setSlideIndex(slideIndex - 1);
    };

    const rendPage = (e: React.MouseEvent<HTMLButtonElement>) => {
        router.push(`/${(e.target as HTMLButtonElement).name}`);
    };

    const getPoint = () => {
        // get 기존 포인트 -> put 추가한 포인트
    };

    return (
        <Wrapper>
            <MainTitle>
                <h1>&apos;{infoData[0].type}&apos;</h1>
                <h2> (으)로 분리수거 해주세요!</h2>
            </MainTitle>
            <p>
                &apos;{infoData[0].type}&apos;는{" "}
                {subjects.map((sub) => sub + " / ")}가 포함됩니다.
            </p>
            <CarouselWrapper>
                <ArrowButton type="button" onClick={prevSlide}>
                    <PrevArrow
                        src={nextArrow}
                        alt="prev arrow"
                        width={35}
                        height={35}
                    />
                </ArrowButton>
                <CarouselAll>
                    {infoData.map((info, idx) => {
                        return (
                            <Slider
                                key={`page-${idx}`}
                                className={
                                    slideIndex === idx + 1
                                        ? "is_active"
                                        : "is_pass"
                                }
                            >
                                <InfoBox>
                                    <h3>{info.subject}</h3>
                                    <div>{info.img}</div>
                                    <div>{info.method}</div>
                                    <div>{info.kind}</div>
                                    <div>{info.notKind}</div>
                                    <div>{info.tip}</div>
                                </InfoBox>
                                <div>
                                    <span>
                                        {idx + 1} / {infoData.length}
                                    </span>
                                </div>
                            </Slider>
                        );
                    })}
                </CarouselAll>

                <ArrowButton type="button" onClick={nextSlide}>
                    <Image
                        src={nextArrow}
                        alt="next arrow"
                        width={35}
                        height={35}
                    />
                </ArrowButton>
            </CarouselWrapper>
            <ButtonWrapper>
                <Button type="button" name="waste" onClick={rendPage}>
                    대형폐기물 신고하기
                </Button>
                <Button type="button" name="market" onClick={rendPage}>
                    중고마켓으로 가기
                </Button>
                <PointButton type="button" onClick={getPoint}>
                    <Image
                        src={pointCoin}
                        alt="point coin"
                        width={35}
                        height={35}
                    />
                    <p>포인트 적립하기</p>
                </PointButton>
            </ButtonWrapper>
        </Wrapper>
    );
};

export default InfoCarousel;

const Wrapper = styled.div`
    background: #f2f2f2;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
`;

const MainTitle = styled.div`
    display: flex;
    align-items: flex-end;
`;
const CarouselWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const CarouselAll = styled.div`
    width: 600px;
    height: 500px;
    border-radius: 15px;
    margin: 8px 8px;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: #a7c4bc;
    word-break: keep-all;
`;
const Slider = styled.div`
    width: 550px;
    height: 500px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &.is_pass {
        opacity: 0;
        transition: opacity ease-in-out 0.01s;
    }
    &.is_active {
        opacity: 1;
    }
`;
const InfoBox = styled.div`
    height: 80%;
`;
const ArrowButton = styled.button`
    border: none;
    height: 50px;
    cursor: pointer;
`;
const PrevArrow = styled(Image)`
    transform: scaleX(-1);
`;
const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Button = styled.button`
    border: none;
    cursor: pointer;
    width: 190px;
    height: 50px;
    margin: 18px 6px;
    background-color: #dedede;
    border-radius: 15px;
`;
const PointButton = styled.button`
    display: flex;
    border: none;
    cursor: pointer;
    width: 190px;
    height: 50px;
    margin: 18px 6px;
    background-color: #dedede;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;
