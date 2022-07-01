import React, { useState, useRef, useEffect } from "react";

import Comment from "./Comment";

import styled from "styled-components";
import { styled as materialStyled } from "@mui/material/styles";
import {
    Typography,
    Button,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Collapse,
    Avatar,
    MobileStepper,
    Box,
} from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/material/styles";
import nextArrow from "../../public/images/next.arrow.png";
import Image from "next/image";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = materialStyled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

// 게시글과 댓글 연동은 postId (게시글 번호) 로 연동 !
const SingleBoard = ({ item }) => {
    const [expanded, setExpanded] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = item?.postImg?.length ?? 0; // 자료의 총 길이
    const viewContainerRef = useRef<HTMLDivElement>(null);
    const theme = useTheme();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const nextSlide = () => {
        if (slideIndex === item.postImg?.length) {
            return;
        }
        setActiveStep((cur) => cur + 1);
        setSlideIndex(slideIndex + 1);
    };

    const prevSlide = () => {
        if (slideIndex === 0) {
            return;
        }
        setActiveStep((cur) => cur - 1);
        setSlideIndex(slideIndex - 1);
    };

    useEffect(() => {
        if (viewContainerRef.current) {
            viewContainerRef.current.innerHTML = item?.content ?? "";
        }
    }, [item?.content]);

    return (
        <Wrapper key={`postNum-${item?.postId}`}>
            <CardMain>
                {item?.postImg ? (
                    <CarouselWrapper>
                        <CarouselAll>
                            {item?.postImg?.map((img, idx) => {
                                return (
                                    <Slider
                                        key={`page-${idx}`}
                                        className={
                                            slideIndex === idx
                                                ? "is_active"
                                                : "is_pass"
                                        }
                                    >
                                        <InfoBox>
                                            <Image
                                                src={item?.postImg[idx]}
                                                alt={`img-${idx}`}
                                                width={250}
                                                height={250}
                                            />
                                        </InfoBox>
                                    </Slider>
                                );
                            })}
                        </CarouselAll>
                    </CarouselWrapper>
                ) : null}
            </CardMain>
            <Stepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <StepButton
                        size="small"
                        onClick={nextSlide}
                        disabled={activeStep === maxSteps - 1}
                    >
                        다음
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </StepButton>
                }
                backButton={
                    <StepButton
                        size="small"
                        onClick={prevSlide}
                        disabled={activeStep === 0}
                    >
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        이전
                    </StepButton>
                }
            />
            <CardBodyContainer>
                <PostTitle gutterBottom variant="h5">
                    {item?.title}
                </PostTitle>

                <PostBody ref={viewContainerRef} />

                <CardWriterContainer
                    avatar={<Avatar alt="userProfile" src={item.userImg} />}
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={item?.nickname}
                    subheader={item?.createdAt?.slice(0, 10)}
                />
            </CardBodyContainer>

            <CardActionTab disableSpacing>
                <CommentTitle variant="body2" color="text.secondary">
                    <span>댓글</span>
                </CommentTitle>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActionTab>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent
                    style={{
                        backgroundColor: "white",
                        borderRadius: "15px",
                        marginTop: "3px",
                    }}
                >
                    <Comment
                        expand={expanded}
                        postId={item.postId}
                        setExpanded={setExpanded}
                    />
                </CardContent>
            </Collapse>
        </Wrapper>
    );
};
export default SingleBoard;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: #a7c4bc 0px 1px 2px #a7c4bc 0px 1px 2px;
    padding: 5px 5px;
    border-bottom: 2px dashed #305e63;
`;

const CarouselWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
`;
const CarouselAll = styled.div`
    width: auto;
    height: auto;
    border-radius: 15px;
    margin: 8px 8px;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: #a7c4bc;
`;
const Slider = styled.div`
    width: 100%;
    height: auto;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    &.is_pass {
        opacity: 0;
        transition: opacity ease-in-out 0.01s;
    }
    &.is_active {
        opacity: 1;
    }
`;
const InfoBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 15px;
`;

const CardWriterContainer = materialStyled(CardHeader)(() => ({
    padding: "16px 0 0 0",
    fontFamily: "Elice Digital Baeum",
    height: "30px",
}));

const CardBodyContainer = materialStyled(CardContent)(() => ({
    height: "100%",
    backgroundColor: "white",
    margin: "1px 0 4px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    borderRadius: "15px",
}));

const PostTitle = materialStyled(Typography)(() => ({
    fontFamily: "Elice Digital Baeum",
    fontSize: "26px",
    fontWeight: "bold",
}));

const CommentTitle = materialStyled(Typography)(() => ({
    fontFamily: "Elice Digital Baeum",
    fontSize: "13px",
    fontWeight: "bold",
    paddingLeft: "10px",
    color: "#305e63",
}));

const CardMain = materialStyled(Card)(() => ({
    minHeight: "270px",
    boxShadow: "none",
    borderRadius: "15px",
    marginBottom: "3px",
}));

const Stepper = materialStyled(MobileStepper)(() => ({
    borderRadius: "15px",
    marginBottom: "3px",
    height: "40px",
}));

const StepButton = materialStyled(Button)(() => ({
    backgroundColor: "white",
    fontFamily: "Elice Digital Baeum",
    color: "#305e63",
}));

const CardActionTab = materialStyled(CardActions)(() => ({
    backgroundColor: "white",
    borderRadius: "15px",
    height: "40px",
}));

const PostBody = styled.div`
    height: auto;
    word-break: keep-all;
    overflow: auto;
`;
