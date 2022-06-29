import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const matchType = [
    "종이류",
    "플라스틱류",
    "유리병",
    "캔류",
    "고철류",
    "의류",
    "전자제품",
    "스티로폼",
    "도기류",
    "비닐류",
    "가구",
    "자전거",
    "형광등",
    "페트병류",
    "나무류",
];

const Results = ({ content, index }) => {
    return (
        <div key={`${index}`}>
            {index + 1}번은 &apos;{matchType[content.code]}&apos; (으)로
            분류되며, {content.confidence}% 확신합니다.{" "}
        </div>
    );
};

const Detection = ({ detection, index }) => {
    const top = detection.xyxy[1] * 350;
    const left = detection.xyxy[0] * 600;
    const width = (detection.xyxy[2] - detection.xyxy[0]) * 600;
    const height = (detection.xyxy[3] - detection.xyxy[1]) * 350;

    return (
        <DetectionBox
            key={`image-${detection.code}`}
            top={top}
            left={left}
            height={height}
            width={width}
            onClick={(e) => console.log(detection.code)}
        >
            <p>{index + 1}번</p>
        </DetectionBox>
    );
};

const ImgDetection = ({ info, imgUrl }) => {
    return (
        <Container>
            <h3>Results...</h3>
            <Wrapper>
                <Image
                    src={imgUrl}
                    alt="preview-image"
                    width="600"
                    height="350"
                    layout="fill"
                />
                {info.map((detection, index) => {
                    return (
                        <Detection
                            key={`detectionImage${detection.code}`}
                            detection={detection}
                            index={index}
                        />
                    );
                })}
            </Wrapper>
            <div>
                {info.map((content, index) => {
                    return (
                        <Results
                            key={`result${index}`}
                            content={content}
                            index={index}
                        />
                    );
                })}
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
    position: relative;
    width: 600px;
    height: 350px;
    display: flex;
`;

const DetectionBox = styled.div<{
    top: number;
    left: number;
    width: number;
    height: number;
}>`
    position: absolute;
    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border: 3px solid #00ff00;
    cursor: pointer;
    color: #00ff00;
    :hover {
        border: 3px solid red;
    }
`;
