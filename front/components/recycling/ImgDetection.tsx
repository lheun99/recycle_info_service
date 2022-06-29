import React, { useEffect } from "react";
import styled from "styled-components";
import { getRecycleInfo } from "../../api";

const ImgDetection = ({ info }) => {
    console.log(info);
    const getInfo = async () => {
        const code = info.imgInfo?.map((item) => item.code);
        const object = { code: [] };
        object["code"] = code;
        console.log(object);
        const res = await getRecycleInfo(`recycle-info/img`, { code: code });
        console.log(res);
    };
    useEffect(() => {
        getInfo();
    });
    return (
        <Container>
            <h3>Results...</h3>
            <Wrapper>image detection</Wrapper>
            <div>
                1번 이미지는 &apos;종이류&apos; (으)로 분류되며, 85% 확신합니다.{" "}
            </div>
        </Container>
    );
};

export default ImgDetection;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 620px;
`;

const Wrapper = styled.div`
    width: 600px;
    height: 350px;
    border: 1px solid #a7c4bc;
`;
