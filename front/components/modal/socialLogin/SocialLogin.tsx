import React, { useContext } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { get } from "../../../api";
import { DispatchContext } from "../../../pages/_app";
import Loading from "../../shared/Loading";

const SocialLogin = () => {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const code = router.query?.code;

    const kakaoLogin = async (code) => {
        try {
            const res = await get(`auth/kakao?code=${code}`);
            const user = res.data.data;
            const jwtToken = user.token;
            sessionStorage.setItem("userToken", jwtToken);

            dispatch({
                type: "LOGIN_SUCCESS",
                payload: user,
            });
            await router.push("/");
        } catch (error) {
            console.log("문제 생김");
        }
    };

    kakaoLogin(code);

    return (
        <Wrapper>
            <Loading width={500} height={500} />
        </Wrapper>
    );
};

export default SocialLogin;

const Wrapper = styled.div`
    height: 100%;
    min-height: 800px;
    padding-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
