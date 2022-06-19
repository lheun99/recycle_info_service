import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import navStyles from "../styles/Nav.module.css";
import LoginOrRegisterModal from "./modal/LoginOrRegisterModal";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { LoginState } from "../states/atom";

const Nav = () => {
    const [login, setLogin] = useRecoilState(LoginState);
    const [loginText, setLoginText] = useState<String>('');
    const [open, setOpen] = useState<Boolean>(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const clickHandler= () => {
        if (login) {
            sessionStorage.removeItem("userToken");
            setLogin(false)
        } else {
            handleOpen();
        }
    }

    useEffect(() => {
        if (login) {
            setLoginText("Sign out")
        } else {
            setLoginText("Sing in")
        }
    }, [login]);

    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/" passHref>
                        <a className={navStyles.titleWrapper}>
                            <Image
                                src={Logo}
                                alt="logo"
                                width={30}
                                height={30}
                            />
                        </a>
                    </Link>
                </li>
            </ul>
            <ul className={navStyles.navList}>
                <li>
                    <Link href="/recycling/aiSearcher" passHref>
                        <a>분리배출 하러가기</a>
                    </Link>
                </li>
                <li>
                    <Link href="/waste" passHref>
                        <a>우리동네 대형폐기물 신고하기</a>
                    </Link>
                </li>
                <li>
                    <Link href="/" passHref>
                        <a>중고마켓</a>
                    </Link>
                </li>
                <li>
                    <Link href="/quiz" passHref>
                        <a>퀴즈 / 게임 하러가기</a>
                    </Link>
                </li>
                <li>
                    <Link href="/myPage" passHref>
                        <a>마이페이지</a>
                    </Link>
                </li>
                <li>
                    <LoginLi onClick={clickHandler}>{loginText}</LoginLi>
                    {
                        open && ( 
                            <LoginOrRegisterModal
                                open={open}
                                handleClose={handleClose}
                            />
                        )
                    }
                </li>
            </ul>
        </nav>
    );
};

export default Nav;


const LoginLi = styled.div`
    cursor: pointer;
`;