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

// data map 할 예정, 게시글과 댓글 연동은 postId (게시글 번호) 로 연동 !
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
            <Card
                style={{
                    minHeight: "280px",
                    boxShadow: "none",
                }}
            >
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
                                                width={260}
                                                height={260}
                                            />
                                        </InfoBox>
                                    </Slider>
                                );
                            })}
                        </CarouselAll>
                    </CarouselWrapper>
                ) : null}
            </Card>
            <MobileStepper
                style={{
                    borderRadius: "4px",
                    marginBottom: "5px",
                    height: "50px",
                }}
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={nextSlide}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
                        onClick={prevSlide}
                        disabled={activeStep === 0}
                    >
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
            <CardBodyContainer style={{ height: "400px" }}>
                <PostTitle gutterBottom variant="h5" style={{ height: "auto" }}>
                    {item?.title}
                </PostTitle>

                <div
                    ref={viewContainerRef}
                    style={{
                        height: "auto",
                        wordBreak: "keep-all",
                        overflow: "auto",
                    }}
                />

                <CardWriterContainer
                    avatar={<Avatar alt="userProfile" src={item.userImg} />}
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={item?.nickname}
                    subheader={item?.createdAt?.slice(0, 10)}
                    style={{ height: "50px" }}
                />
            </CardBodyContainer>

            <CardActions
                disableSpacing
                style={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                    height: "50px",
                }}
            >
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
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent style={{ backgroundColor: "white" }}>
                    <Comment expand={expanded} />
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
    border-radius: 15px;

    box-shadow: #a7c4bc 0px 1px 2px #a7c4bc 0px 1px 2px;
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
`;

const CardWriterContainer = materialStyled(CardHeader)(() => ({
    padding: "16px 0 0 0",
    fontFamily: "Elice Digital Baeum",
}));

const CardBodyContainer = materialStyled(CardContent)(() => ({
    height: "100%",
    backgroundColor: "white",
    borderRadius: "4px",
    marginBottom: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
}));

const PostTitle = materialStyled(Typography)(() => ({
    fontFamily: "Elice Digital Baeum",
    fontSize: "26px",
    fontWeight: "bold",
}));

const CommentTitle = materialStyled(Typography)(() => ({
    fontFamily: "Elice Digital Baeum",
    fontSize: "15px",
    fontWeight: "bold",
    paddingLeft: "10px",
}));
