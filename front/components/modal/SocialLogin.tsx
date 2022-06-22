import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { get } from "../../api";

const SocialLogin = () => {
    const router = useRouter();
    const code = router.query?.code;

    const kakaoLogin = async (code) => {
        try {
            const res = await get(`auth/kakao?code=${code}`);
            console.log(res);
        } catch (error) {
            console.log("문제 생김");
        }
    };

    useEffect(() => {
        code !== undefined ? kakaoLogin(code) : console.log("hi")
    }, [code])

    return (
        <Wrapper>
            <h1>카카오</h1>
        </Wrapper>
    );
};

export default SocialLogin;

const Wrapper = styled.div`
    height: 100%;
    min-height: 800px;
    padding-top: 60px;
`;
