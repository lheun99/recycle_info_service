import React, { useState } from "react";
import Image from "next/image";
import nextArrow from "../../public/images/next.arrow.png";
import styled from "styled-components";

const InfoCard = ({ cards, route }) => {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = (idx) => {
        if (slideIndex === cards.length) {
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

    return (
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
                {cards?.map((card, idx) => {
                    return (
                        <Slider
                            key={`page-${idx}`}
                            className={
                                slideIndex === idx + 1 ? "is_active" : "is_pass"
                            }
                        >
                            <InfoBox>
                                <Image
                                    src={
                                        route === "ImageSearch"
                                            ? card.imgInfo
                                            : card.infoImg
                                    }
                                    alt="recycle-information"
                                    width={290}
                                    height={400}
                                />
                            </InfoBox>
                            <span>
                                {idx + 1} / {cards.length}
                            </span>
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
    );
};

export default InfoCard;

const CarouselWrapper = styled.div`
    max-width: 420px;
    width: 95%;
    height: 470px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    position: relative;
`;

const CarouselAll = styled.div`
    max-width: 400px;
    width: 95%;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    word-break: keep-all;
`;

const Slider = styled.div`
    max-width: 500px;
    width: 90%;
    height: 95%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    &.is_pass {
        opacity: 0;
        transition: opacity ease-in-out 0.01s;
    }
    &.is_active {
        opacity: 1;
    }
`;
const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 95%;
`;

const ArrowButton = styled.button`
    border: none;
    height: 30px;
    cursor: pointer;
`;
const PrevArrow = styled(Image)`
    transform: scaleX(-1);
`;
