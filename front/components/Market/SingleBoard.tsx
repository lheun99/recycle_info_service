import React, { useContext, useState, useRef, useEffect } from "react";
import { UserStateContext } from "../../pages/_app";
import Comment from "./Comment";

import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import {
    Typography,
    Button,
    Card,
    CardHeader,
    CardMedia,
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
import { SignalCellularNullTwoTone } from "@mui/icons-material";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = muiStyled((props: ExpandMoreProps) => {
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
const SingleBoard = ({ postImg, content, title }) => {
    const [expanded, setExpanded] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = postImg?.length ?? 0; // 자료의 총 길이
    const userInfo = useContext(UserStateContext);
    const viewContainerRef = useRef<HTMLDivElement>(null);

    const profileImg = userInfo?.user?.picture ?? "";
    const nickname = userInfo?.user?.nickname ?? "";
    const theme = useTheme();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };
    // const handleStepChange = (step: number) => {
    //     setActiveStep(step);
    // };

    const nextSlide = () => {
        if (slideIndex === postImg?.length) {
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
            viewContainerRef.current.innerHTML = content;
        }
    }, []);

    return (
        <div
            style={{
                width: "410px",
                height: "100%",
                borderRadius: "15px",
                margin: "5px 5px 20px 5px",
                padding: "3px 3px",
                backgroundColor: "white",
                boxShadow: "#a7c4bc 0px 1px 2px, #a7c4bc 0px 1px 2px",
            }}
        >
            <Card
                style={{
                    minHeight: "300PX",
                    boxShadow: "none",
                }}
            >
                {postImg ? (
                    <CarouselWrapper>
                        <CarouselAll>
                            {postImg?.map((img, idx) => {
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
                                                src={postImg[idx]}
                                                alt={`img-${idx}`}
                                                width={290}
                                                height={290}
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
            <CardContent
                style={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                    marginBottom: "5px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    paddingBottom: "12px",
                }}
            >
                <Typography gutterBottom variant="h5" component="div">
                    <h3>{title}</h3>
                </Typography>

                <div ref={viewContainerRef} />

                <CardHeader
                    avatar={<Avatar alt="userProfile" src={profileImg} />}
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={nickname}
                    subheader="September 14, 2016"
                    style={{ padding: "16px 0 0 0" }}
                />
            </CardContent>

            <CardActions
                disableSpacing
                style={{ backgroundColor: "white", borderRadius: "4px" }}
            >
                <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ padding: "0 0 0 16px" }}
                >
                    <span>댓글</span>
                </Typography>
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
                <CardContent>
                    <Comment expand={expanded} />
                </CardContent>
            </Collapse>
        </div>
    );
};
export default SingleBoard;

const CarouselWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
const CarouselAll = styled.div`
    width: auto;
    height: 100%;
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
