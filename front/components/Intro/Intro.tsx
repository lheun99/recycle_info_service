import React, { useState } from "react";
import IntroStyles from "../../styles/Intro.module.css";
import IntroData from "./IntroData";

const Intro = () => {
    // const [text, setText] = useState<string>("aa");

    return (
        <div>
            <div className={IntroStyles.intro_wrapper}>
                <div className={IntroStyles.intro_head}>
                    {/* <IntroData title="구해줘! 지구" subtitle=""/> */}
                    <div className={IntroStyles.intro_data}>
                        <div className={IntroStyles.intro_title}>
                            구해줘! 지구
                        </div>
                        <div className={IntroStyles.intro_text}>
                            <div>내 손안의 분리배출</div>
                            <div>작은 실천이 지구를 지킵니다.</div>
                        </div>
                        <div>
                            버튼
                        </div>
                    </div>
                    <img src="favicon.ico"></img>
                </div>
                <div style={{ height: "400px"}}/>
                <div className={IntroStyles.intro_recycling}>
                    <img src="favicon.ico"></img>
                    <div className={IntroStyles.intro_data}>
                        <div className={IntroStyles.intro_title}>
                            <div>분리수거 어렵다구요?</div>
                            <div>찍어보세요!</div>
                        </div>
                        <div className={IntroStyles.intro_text}>
                            <div>헷갈리는 분리배출을 도와줍니다.</div>
                        </div>
                        <div>
                            버튼
                        </div>
                    </div>
                </div>
                <div className={IntroStyles.intro_chart}>
                    <div className={IntroStyles.intro_data}>
                        <div className={IntroStyles.intro_title}>
                            <div>환경을 도와주세요!</div>
                        </div>
                        <div className={IntroStyles.intro_text}>
                            <div>우리나라의 실질적인 재활용률은 40%도 되지 않습니다. </div>
                        </div>
                        <div>
                            버튼
                        </div>
                    </div>
                </div>
                <div className={IntroStyles.intro_card}>
                    <div className={IntroStyles.intro_card_item}>
                        <div className={IntroStyles.intro_card_background}>
                            <div className={IntroStyles.intro_card_image}>
                            </div>
                        </div>
                    </div>
                    <div className={IntroStyles.intro_card_item}>
                        <div className={IntroStyles.intro_card_data}>
                            <div className={IntroStyles.intro_subtitle}>
                                <div>게임하고 포인트 받자!</div>
                            </div>
                            <div className={IntroStyles.intro_text}>
                                <div>올바른 분리수거 방법을 재미있게 알아보아요!</div>
                            </div>
                            <div>
                                게임하러 가기 버튼
                            </div>
                        </div>
                    </div>
                </div>
                <div className={IntroStyles.intro_card}>
                    <div className={IntroStyles.intro_card_item}>
                        <div className={IntroStyles.intro_card_data}>
                            <div className={IntroStyles.intro_subtitle}>
                                <div>하루 한 번 퀴즈에 참여해요!</div>
                            </div>
                            <div className={IntroStyles.intro_text}>
                                <div>분리수거에 관련된 퀴즈를 풀어보고 포인트를 얻어요!</div>
                            </div>
                            <div>
                                퀴즈 참여하기 버튼
                            </div>
                        </div>
                    </div>
                    <div className={IntroStyles.intro_card_item}>
                        <div className={IntroStyles.intro_card_background}>
                            <div className={IntroStyles.intro_card_image}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={IntroStyles.intro_card}>
                    <div className={IntroStyles.intro_card_item}>
                        <div className={IntroStyles.intro_card_background}>
                            <div className={IntroStyles.intro_card_image}>
                            </div>
                        </div>
                    </div>
                    <div className={IntroStyles.intro_card_item}>
                        <div className={IntroStyles.intro_card_data}>
                            <div className={IntroStyles.intro_subtitle}>
                                <div>나의 랭킹은?</div>
                            </div>
                            <div className={IntroStyles.intro_text}>
                                <div>열심히 모은 포인트! 얼마나 되는지 랭킹을 통해 알아보아요.</div>
                            </div>
                            <div>
                                랭킹 확인하기 버튼
                            </div>
                        </div>
                    </div>
                </div>
                <div className={IntroStyles.intro_insert_text}>
                    <div>올바른 분리수거는 지구를 구하는 첫 걸음이 될 수 있어요.</div>
                    <div>지구지구</div>
                </div>
                <div className={IntroStyles.intro_waste_market}>
                    <div className={IntroStyles.intro_waste_market_item}>
                        <div className={IntroStyles.intro_waste_market_top_wrapper}>
                            <div className={IntroStyles.intro_waste_market_image}></div>
                            <div className={IntroStyles.intro_waste_market_text}>우리는 이런것도 제공해요!</div>
                        </div>
                    </div>
                    <div className={IntroStyles.intro_waste_market_item}>
                        <div className={IntroStyles.intro_waste_market_bottom_wrapper}>
                            <div className={IntroStyles.intro_waste_market_data}>
                                <div>우리 동네 대형폐기물 스티커는 어디서?</div>
                                <div>버튼</div>
                            </div>
                            <div className={IntroStyles.intro_waste_market_data}>
                                <div>멀쩡한데.. 중고로 팔아볼까?</div>
                                <div>버튼</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;