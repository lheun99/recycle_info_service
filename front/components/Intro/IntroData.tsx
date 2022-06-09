import IntroStyles from "../../styles/Intro.module.css";
// import styled from "styled-components";
import Button from '@mui/material/Button';

type IntroDataProps = {
    title?: string;
    subtitle?: string;
    text?: string;
    button?: string;
}

// const IntroButton = styled(Button)`
//     border-color: var(--gray);
//     color: var(--gray);
//     `
// ;

const IntroData = ({ title, subtitle, text, button } : IntroDataProps) => {
    return (
        <div className={IntroStyles.intro_data}>
            <div className={IntroStyles.intro_title}>{title}</div>
            <div className={IntroStyles.intro_subtitle}>{subtitle}</div>
            <div className={IntroStyles.intro_text}>{text}</div>
            {
                button ? <Button className={IntroStyles.intro_button} variant="outlined">{button}</Button> : null
            }
        </div>
    )
}

export default IntroData;