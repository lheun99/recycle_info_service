import React from "react";
import styled from "styled-components";

const ImgDetection = ({ info }) => {
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
    height: 700px;
`;

const Wrapper = styled.div`
    width: 600px;
    height: 350px;
    border: 1px solid #a7c4bc;
`;
