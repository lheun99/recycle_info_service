import { useRouter } from "next/router";
import IntroStyles from "../../styles/Intro.module.css";
import Button from '@mui/material/Button';

type IntroDataProps = {
    title?: string;
    subtitle?: string;
    text: string;
    hasButton?: string;
    href?: string;
}

const IntroData = ({ title, subtitle, text, hasButton, href } : IntroDataProps) => {
    const router = useRouter()
    const handleClick = () => {
        router.push(href)
    }

    return (
        <div className={IntroStyles.intro_data}>
            <div className={IntroStyles.intro_title}>{title}</div>
            <div className={IntroStyles.intro_subtitle}>{subtitle}</div>
            <div className={IntroStyles.intro_text}>{text}</div>
            {
                hasButton && 
                    <Button 
                        sx={{ borderColor: "#818479", color: "#818479"}} 
                        className={IntroStyles.intro_button} 
                        variant="outlined"
                        onClick={handleClick}
                    >
                        {hasButton}
                    </Button>
            }
        </div>
    )
}

export default IntroData;