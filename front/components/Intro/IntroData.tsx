import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import { styled as materialStyled } from '@mui/material/styles';
import styled from "styled-components";

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
        <Wrapper>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
            <Contents>{text}</Contents>
            {
                hasButton && 
                    <NavButton
                        sx={{ borderColor: "#818479", color: "#818479"}}
                        variant="outlined"
                        onClick={handleClick}
                    >
                        {hasButton}
                    </NavButton>
            }
        </Wrapper>
    )
}

export default IntroData;


const Wrapper = styled.div`
    width: 35%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    white-space: pre-wrap;
    margin: 0 50px;
    @media screen and (max-width: 1224px) {
        width: auto;
    };
`;

const Title = styled.div`
    font-size: var(--font-title);
    font-weight: bold;
    @media screen and (max-width: 1224px) {
        font-size: var(--font-subtitle);
    };
`;

const SubTitle = styled.div`
    font-size: var(--font-subtitle);
    font-weight: bold;
    @media screen and (max-width: 1224px) {
        font-size: var(--font-text);
    };
`;

const Contents = styled.p`
    font-size: var(--font-text);
    @media screen and (max-width: 1224px) {
        font-size: var(--font-text);
    };
`;

const NavButton = materialStyled(Button)(
    () => (
        {
            width: '170px',
            height: '70px',
            borderRadius: '10px',
            backgroundColor: 'var(--gray)',
            color: 'black',
            fontSize: 'var(--font-text)',
            '&:hover': {
                backgroundColor: 'var(--deepgray)',
                border: 'none',
            }
        }
    ));
    
