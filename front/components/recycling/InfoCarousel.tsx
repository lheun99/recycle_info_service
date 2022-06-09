import React, { useState } from "react";
import infoData from "./infoData.json";
import carouselStyles from "../../styles/Carousel.module.css";

const subjects = infoData.map((info) => info.subject);

const InfoCarousel = () => {
    const [slideIndex, setSlideIndex] = useState<number>(1);

    const nextSlide = () => {
        if (slideIndex !== infoData.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === infoData.length) {
            return;
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            return;
        }
    };

    return (
        <div
            style={{
                backgroundColor: "#F2F2F2",
                width: "100%",
                height: "700px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div className={carouselStyles.mainTitle}>
                <h1>&apos;{infoData[0].type}&apos;</h1>
                <h2> (으)로 분리수거 해주세요!</h2>
            </div>
            <p>
                &apos;{infoData[0].type}&apos;는{" "}
                {subjects.map((sub) => sub + " / ")}가 포함됩니다.
            </p>
            <div className={carouselStyles.carouselWrapper}>
                <button
                    className={carouselStyles.arrowButton}
                    type="button"
                    onClick={prevSlide}
                >
                    ◀
                </button>
                <div className={carouselStyles.carouselAll}>
                    {infoData.map((info, idx) => {
                        return (
                            <div
                                key={`page-${idx}`}
                                className={
                                    slideIndex === idx + 1
                                        ? carouselStyles.activeAnim
                                        : carouselStyles.slide
                                }
                            >
                                <div className={carouselStyles.infoBox}>
                                    <h3>{info.subject}</h3>
                                    <div>{info.img}</div>
                                    <div>{info.method}</div>
                                    <div>{info.kind}</div>
                                    <div>{info.notKind}</div>
                                    <div>{info.tip}</div>
                                </div>
                                <div>
                                    <span>
                                        {idx + 1}/{infoData.length}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button
                    className={carouselStyles.arrowButton}
                    type="button"
                    onClick={nextSlide}
                >
                    ▶
                </button>
            </div>
            <div>
                <button className={carouselStyles.button} type="button">
                    대형폐기물 신고하기
                </button>
                <button className={carouselStyles.button} type="button">
                    중고마켓으로 가기
                </button>
                <button className={carouselStyles.button} type="button">
                    💰point
                </button>
            </div>
        </div>
    );
};

export default InfoCarousel;
