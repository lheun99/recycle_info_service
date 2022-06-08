import IntroStyles from "../../styles/Intro.module.css";

const IntroData = ({ title, subtitle }) => {
    return (
        <div className={IntroStyles.intro_data}>
            <div className={IntroStyles.intro_title}>
                {title}
            </div>
            <div className={IntroStyles.intro_subtitle}>
                <div>내 손안의 분리배출</div>
                <div>작은 실천이 지구를 지킵니다.</div>
            </div>
            <div>
                버튼
            </div>
        </div>
    )
}

export default IntroData;