import React, { useState } from "react";
import IntroStyles from "../../styles/Intro.module.css";

const Intro = () => {
    // const [text, setText] = useState<string>("aa");

    return (
        <div>
            <div className={IntroStyles.intro_wrapper}>
                <div className={IntroStyles.intro_head}>
                    <div className={IntroStyles.intro_data}>
                        <div className={IntroStyles.intro_title}>
                            구해줘! 지구
                        </div>
                        <div className={IntroStyles.intro_subtitle}>
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
                        <div className={IntroStyles.intro_subtitle}>
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
                        <div className={IntroStyles.intro_subtitle}>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi esse harum molestias exercitationem temporibus culpa corporis, aspernatur adipisci voluptatibus, amet qui reprehenderit maxime fuga nobis voluptatum, sapiente tempore dolores?</div>
                        </div>
                        <div>
                            버튼
                        </div>
                    </div>
                </div>
                <div className={IntroStyles.intro_card}>

                </div>
                <div className={IntroStyles.intro_subtitle}>

                </div>
                <div className={IntroStyles.intro_waste_market}>

                </div>
            </div>
        </div>
    );
}

export default Intro;