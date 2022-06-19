import Intro from "../components/Intro/Intro";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { UserInfoState, LoginState } from "../states/atom";

export default function Home() {
    const [userInfo, setUserInfo] = useRecoilState(UserInfoState);
    const [userLogin, setUserLogin] = useRecoilState(LoginState);

    useEffect(() => {
        if (userLogin) {
            // 유저정보 받아오기
            // console.log(userInfo)
            console.log("%c sessionStorage에 토큰 있음.", "color: #d93d1a;");
        } else {
            console.log("%c SessionStorage에 토큰 없음.", "color: #d93d1a;");
        }
    }, [userLogin]);

    return (
        <div>
            <Intro />
        </div>
    );
}
