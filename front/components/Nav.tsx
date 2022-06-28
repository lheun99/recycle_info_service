import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import LoginOrRegisterModal from "./modal/LoginOrRegisterModal";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { LoginState } from "../states/atoms";
import styled from "styled-components";
import { UserStateContext } from "../pages/_app";
import MenuIcon from "../public/images/menu.png"; 

interface ContainerProps {
    bgColor: string;
  }

const Nav = () => {
    const userInfo = useContext(UserStateContext);
    const [login, setLogin] = useRecoilState(LoginState);
    const [open, setOpen] = useState<Boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const router = useRouter();

    const [toggle, setToggle] = useState<boolean>(false);
    // const menu = document.querySelector("#menu");
    const clickHandler = () => {
        setToggle(!toggle);
    }
    useEffect(() => {
        if (userInfo.user === null) {
            setLogin(false);
        } else {
            setLogin(true);
        }
    }, [userInfo.user]);

    return (
        <Wrapper>
            <NavIcon>
                <Link href="/">
                    <TitleWrapper>
                        <Image
                            src={Logo}
                            alt="logo"
                            width={30}
                            height={30}
                        />
                    </TitleWrapper>
                </Link>
            </NavIcon>
            <NavList>
                <NavListItem>
                    <Link href="/recycling/aiSearcher">
                        <a>분리배출 하러가기</a>
                    </Link>
                </NavListItem>
                <NavListItem>
                    <Link href="/waste">
                        <a>우리동네 대형폐기물 신고하기</a>
                    </Link>
                </NavListItem>
                <NavListItem>
                    <Link href="/market">
                        <a>중고마켓</a>
                    </Link>
                </NavListItem>
                <NavListItem>
                    <Link href="/quiz">
                        <a>퀴즈 풀러가기</a>
                    </Link>
                </NavListItem>
                {login && (
                    <NavListItem>
                        <Link href="/myPage">
                            <a>마이페이지</a>
                        </Link>
                    </NavListItem>
                )}
                <NavListItem>
                    {login ? (
                        <LoginButton
                            onClick={() => {
                                setLogin(false);
                                sessionStorage.removeItem("userToken");
                                router.push("/");
                            }}
                        >
                            Sign out
                        </LoginButton>
                    ) : (
                        <LoginButton onClick={handleOpen}>Sign in</LoginButton>
                    )}
                    <LoginOrRegisterModal
                        open={open}
                        handleClose={handleClose}
                    />
                </NavListItem>
            </NavList>
            <Menu onClick={clickHandler}>
                <Image 
                    src={MenuIcon}
                    alt="menu"
                    width={20}
                    height={20}
                />
            </Menu>
        </Wrapper>
    );
};

export default Nav;


const Wrapper = styled.div<any>`
    width: 100%;
    padding: 0 3rem;
    height: var(--nav-height);
    position: absolute;
    z-index: 5;
    display: grid;
    grid-template-columns: 1fr 3fr;
    background-color: white;
    opacity: 0.83;
    // ${({isMobile}) => isMobile && `        
    //     flex-direction: column;
    // `}
    @media screen and (max-width: 900px) {
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    };
`;

const NavIcon = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    font-size: 30px;
    font-weight: bold;
    @media screen and (max-width: 900px) {
        width: 100%;
        height: 60px;
        justify-content: center;
    };
`;

const NavList = styled.div`
    display: flex;
    font-size: 14px !important;
    justify-content: flex-end;
    align-items: center;
    @media screen and (max-width: 900px) {
        width: 100%;
        flex-direction: column;
    };
`;

const NavListItem = styled.li`
    margin: 0 1rem;
    display: flex;
    @media screen and (max-width: 900px) {
        display: flex;
        height: 60px;
        width: 100%;
        justify-content: center;
        align-items: center;
    };
`;

const TitleWrapper = styled.a`
    display: flex;
    align-items: center;
`;

const LoginButton = styled.div`
    cursor: pointer;
`;

const Menu = styled.div`
    display: none;
    @media screen and (max-width: 900px) {
        display: block;
        position: absolute;
        right: 20px;
        top: 20px;
        cursor: pointer;
    };
`;