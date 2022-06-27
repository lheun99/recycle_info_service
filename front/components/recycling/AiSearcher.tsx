import React from "react";
import ImageUpload from "../../components/shared/ImageUpload";
import InfoCarousel from "./InfoCarousel";
import styled from "styled-components";

const AiSearcher = () => {
    return (
        <Container>
            <h1>사물을 찍어주세요!</h1>
            <p>
                캔, 병, 과자봉지 등 사물 다 상관없어요. <br />
                무엇이든 분리배출 방법을 알려드려요.
            </p>
            <Wrapper>
                <ImageWrapper>
                    <ImageForm>
                        <ImageUpload
                            width={600}
                            height={350}
                            route="recycleInfo"
                        />
                    </ImageForm>
                </ImageWrapper>
                <InfoWrapper>
                    <InfoCarousel />
                </InfoWrapper>
            </Wrapper>
        </Container>
    );
};

export default AiSearcher;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--gray);
    width: 100%;
    height: 1100px;
    align-items: center;
    text-align: center;
    padding-top: 100px;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 700px;
`;

const ImageWrapper = styled.div`
    background-color: var(--gray);
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ImageForm = styled.div``;

const InfoWrapper = styled.div``;
