import React, { useState, useEffect } from "react";
import ImageUpload from "../../components/shared/ImageUpload";
import ImgDetection from "./ImgDetection";
import InfoCarousel from "./InfoCarousel";
import styled from "styled-components";
import { Fab, Autocomplete, TextField } from "@mui/material";
import { styled as materialStyled } from "@mui/material/styles";
import RecycleInfo from "../../public/recycleInfo.json";

const categoryData = Array.from(
    new Set(RecycleInfo.map((data) => data.category))
);

const AiSearcher = () => {
    const [info, setInfo] = useState([]);
    const [openInfo, setOpenInfo] = useState(false);
    const [isAllInfo, setIsAllInfo] = useState(true);

    const [name, setName] = useState<string | null>(null);
    const [inputName, setInputName] = useState("");

    useEffect(() => {
        setName(null);
    }, [isAllInfo]);

    return (
        <>
            <Container>
                {isAllInfo && (
                    <>
                        <h1>사물을 찍어주세요!</h1>
                        <p>
                            캔, 병, 과자봉지 등 사물 다 상관없어요. <br />
                            무엇이든 분리배출 방법을 알려드려요.
                        </p>
                    </>
                )}
                <FaButton
                    variant="extended"
                    size="large"
                    onClick={() => {
                        setIsAllInfo((cur) => !cur);
                    }}
                >
                    분리배출 정보 다 보기
                </FaButton>
                <Wrapper className={openInfo ? "success" : "uploading"}>
                    {isAllInfo && (
                        <ImageWrapper>
                            <ImageForm>
                                {!openInfo ? (
                                    <ImageUpload
                                        width={600}
                                        height={350}
                                        route="recycleInfo"
                                        setInfo={setInfo}
                                        setOpenInfo={setOpenInfo}
                                    />
                                ) : (
                                    <ImgDetection info={info} />
                                )}
                            </ImageForm>
                        </ImageWrapper>
                    )}
                    {openInfo ||
                        (!isAllInfo &&
                            (!isAllInfo ? (
                                <InfoWrapper>
                                    <h1>카테고리를 선택해보세요.</h1>
                                    <Autocomplete
                                        value={name}
                                        onChange={(
                                            event: any,
                                            newValue: string | null
                                        ) => {
                                            setName(newValue);
                                        }}
                                        inputValue={inputName}
                                        onInputChange={(
                                            event,
                                            newInputValue
                                        ) => {
                                            setInputName(newInputValue);
                                        }}
                                        id="controllable-states-demo"
                                        options={categoryData}
                                        sx={{ width: 280 }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="카테고리"
                                            />
                                        )}
                                    />
                                    <InfoCarousel info={info} />
                                </InfoWrapper>
                            ) : (
                                <InfoCarousel info={info} />
                            )))}
                </Wrapper>
            </Container>
        </>
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
    width: 100%;
    height: 500px;
    &.success {
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 700px;
    }
`;

const ImageWrapper = styled.div`
    background-color: var(--gray);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ImageForm = styled.div``;
const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 850px;
`;

const FaButton = materialStyled(Fab)(() => ({
    margin: "0px",
    top: "auto",
    right: "20px",
    bottom: "20px",
    left: "auto",
    position: "fixed",
    backgroundColor: "#305e63",
    color: "#fff",
    fontFamily: "Elice Digital Baeum",
    "&:hover": {
        backgroundColor: "#fff",
        color: "#305e63",
    },
}));
