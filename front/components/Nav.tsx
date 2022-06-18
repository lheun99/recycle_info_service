import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import navStyles from "../styles/Nav.module.css";
import LoginOrRegisterModal from "./modal/LoginOrRegisterModal";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { UserState } from '../states/UserState';
import * as Api from "../api";

const Nav = () => {
    const [userId, setUserId] = useRecoilState(UserState);
    const [loginText, setLoginText] = useState<String>('');
    const [open, setOpen] = useState<Boolean>(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const clickHandler= () => {
        if (userId !== '') { //유저 정보가 있으면
            sessionStorage.removeItem("userToken");
            setUserId('')
        } else {
            handleOpen();
        }
    }

    useEffect(() => {
        console.log(userId)
        if (userId !== '') { 
            setLoginText("Sign out");
            console.log("로그인!")
        } else {
            setLoginText("Sign in");
            console.log("로그아웃!")
        }

        const fetchCurrentUser = async () => {
            try {
                // 이전에 발급받은 토큰이 있다면, 이를 가지고 유저 정보를 받아옴.
                // const res = await Api.get("users/current");
                // const currentUser = res.data;
                // setCurrentUser(res.data);

                console.log("%c sessionStorage에 토큰 있음.", "color: #d93d1a;");
            } catch {
                console.log("%c SessionStorage에 토큰 없음.", "color: #d93d1a;");
            }
        };
    }, [userId]);

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
                        userId === '' && ( 
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