import React from "react";
import IntroStyles from "../../styles/Intro.module.css";
import IntroData from "./IntroData";
import DoughnutChart from "./DoughnutChart";
import Image from "next/image";
import Handphone from "../../public/images/handphone.png";
import DownArrow from "../../public/images/down-arrow.png";

const Intro = () => {
    const handleScroll = () => {
        const screenHeight = document.querySelector("#intro").clientHeight;
        window.scrollTo({
          top: screenHeight,
          behavior: 'smooth'
        })
    }

    return (
        <main>
            <section id="intro" className={IntroStyles.intro_wrapper}>
                <div className={IntroStyles.intro_head}>
                    <IntroData
                        title={"구해줘! 지구"}
                        text={
                            "내 손안의 분리배출\n작은 실천이 지구를 지킵니다.\n\n\n\n"
                        }
                    />
                    <button className={IntroStyles.intro_arrow} onClick={handleScroll}>
                        <Image
                            src={DownArrow}
                            alt="down-arrow"
                            width={40}
                            height={40}
                        />
                    </button>
                </div>
                <div className={IntroStyles.intro_video}>
                    <video muted autoPlay loop>
                        <source src="/videos/Preview.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>
            <section>
                <div className={IntroStyles.intro_recycling}>
                    <Image
                        src={Handphone}
                        alt="handphone"
                        width={300}
                        height={300}
                    />
                    <IntroData
                        title={"분리수거 어렵다구요?\n찍어보세요!"}
                        text={"헷갈리는 분리배출을 도와줍니다."}
                        hasButton={"분리배출 하러가기"}
                    />
                </div>
                <div className={IntroStyles.intro_chart}>
                    <IntroData
                        title={"환경을 도와주세요!"}
                        text={
                            "우리나라의 실질적인 재활용률은 40%도 되지 않습니다."
                        }
                    />
                    <DoughnutChart />
                </div>
                <div className={IntroStyles.intro_card}>
                    <div className={IntroStyles.intro_card_item}>
                        <div
                            className={IntroStyles.intro_card_background}
                            style={{ backgroundColor: "var(--deepgreen)" }}
                        >
                            <div className={IntroStyles.intro_card_image} />
                        </div>
                    </div>
                    <div className={IntroStyles.intro_card_item}>
                        <IntroData
                            subtitle={"게임하고 포인트 받자!"}
                            text={"올바른 분리수거 방법을 재미있게 알아보아요!"}
                            hasButton={"게임 하러가기"}
                        />
                    </div>
                </div>
                <div className={IntroStyles.intro_card}>
                    <div className={IntroStyles.intro_card_item}>
                        <IntroData
                            subtitle={"하루 한 번 퀴즈에 참여해요!"}
                            text={
                                "분리수거에 관련된 퀴즈를 풀어보고 포인트를 얻어요!"
                            }
                            hasButton={"퀴즈 참여하기"}
                        />
                    </div>
                    <div className={IntroStyles.intro_card_item}>
                        <div
                            className={IntroStyles.intro_card_background}
                            style={{ backgroundColor: "var(--green)" }}
                        >
                            <div className={IntroStyles.intro_card_image} />
                        </div>
                    </div>
                </div>
                <div className={IntroStyles.intro_card}>
                    <div className={IntroStyles.intro_card_item}>
                        <div
                            className={IntroStyles.intro_card_background}
                            style={{ backgroundColor: "var(--deepgray)" }}
                        >
                            <div className={IntroStyles.intro_card_image} />
                        </div>
                    </div>
                    <div className={IntroStyles.intro_card_item}>
                        <IntroData
                            subtitle={"나의 랭킹은?"}
                            text={
                                "열심히 모은 포인트! 얼마나 되는지 랭킹을 통해 알아보아요."
                            }
                            hasButton={"랭킹 확인하기"}
                        />
                    </div>
                </div>
                <div className={IntroStyles.intro_insert_text}>
                    <div className={IntroStyles.intro_subtitle}>
                        올바른 분리수거는 지구를 구하는 첫 걸음이 될 수 있어요.
                    </div>
                    <div className={IntroStyles.intro_text}>지구지구</div>
                </div>
                <div className={IntroStyles.intro_waste_market}>
                    <div className={IntroStyles.intro_waste_market_item}>
                        <div
                            className={
                                IntroStyles.intro_waste_market_top_wrapper
                            }
                        >
                            <div
                                className={IntroStyles.intro_waste_market_image}
                            ></div>
                            <div
                                className={IntroStyles.intro_waste_market_text}
                            >
                                우리는 이런것도 제공해요!
                            </div>
                        </div>
                    </div>
                    <div className={IntroStyles.intro_waste_market_item}>
                        <div
                            className={
                                IntroStyles.intro_waste_market_bottom_wrapper
                            }
                        >
                            <div
                                className={IntroStyles.intro_waste_market_data}
                            >
                                <div className={IntroStyles.intro_subtitle}>
                                    우리 동네 대형폐기물 스티커는 어디서?
                                </div>
                                <div>버튼</div>
                            </div>
                            <div
                                className={IntroStyles.intro_waste_market_data}
                            >
                                <div className={IntroStyles.intro_subtitle}>
                                    멀쩡한데.. 중고로 팔아볼까?
                                </div>
                                <div>버튼</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Intro;
