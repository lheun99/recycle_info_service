import React from "react";
import IntroData from "./IntroData";
import { useRouter } from 'next/router';
import Image from "next/image";
import styled from "styled-components";
import Handphone from "../../public/images/handphone.png";
import DownArrow from "../../public/images/down-arrow.png";
import Earth from "../../public/images/title.earth.png"
import Eco from "../../public/images/eco.jpeg"
import RightArrow from "../../public/images/right-arrow.png"
import DoughnutChart from "./DoughnutChart";

const Intro = () => {
    const router = useRouter()
    const handleScroll = () => {
        const screenHeight = document.querySelector("#intro").clientHeight;
        window.scrollTo({
          top: screenHeight,
          behavior: 'smooth'
        })
    }

    return (
        <main>
            <Wrapper id="intro">
                <IntroTop>
                    <IntroData
                        title={"구해줘! 지구"}
                        text={
                            "내 손안의 분리배출\n작은 실천이 지구를 지킵니다.\n\n\n\n"
                        }
                    />
                    <Arrow onClick={handleScroll}>
                        <Image
                            src={DownArrow}
                            alt="down-arrow"
                            width={40}
                            height={40}
                        />
                    </Arrow>
                </IntroTop>
                <IntroVideo>
                    <Video muted autoPlay loop>
                        <source src="/videos/Preview.mp4" type="video/mp4" />
                    </Video>
                </IntroVideo>
            </Wrapper>
            <section>
                <SectionRecyling>
                    <Image
                        src={Handphone}
                        alt="handphone"
                        width={300}
                        height={300}
                    />
                    <IntroData
                        title={"분리수거 어렵다구요?\n찍어보세요!"}
                        text={"헷갈리는 분리배출을 도와줍니다."}
                        hasButton={"분리배출 하러가기"}
                        href={"/recycling/aiSearcher"}
                    />
                </SectionRecyling>
                <SectionWaste>
                    <IntroData
                        title={"환경을 도와주세요!"}
                        text={
                            `우리나라는 OECD 국가 중 재활용을 잘 하는 국가 2위이지만 실질적인 재활용은 \n제대로 이루어지고 있지 않습니다.
                            이는 실질적인 재활용 참여 비율이기 때문이며 실질적인 재활용률은 \n40%도 되지 않는다고 합니다. `
                        }
                    />
                    <DoughnutChart />
                </SectionWaste>
                <SectionCard>
                    <CardItem>
                        <IntroData
                            subtitle={"하루 세 번 퀴즈에 참여해요!"}
                            text={
                                "분리수거에 관련된 퀴즈를 풀어보고 포인트를 얻어요!"
                            }
                            hasButton={"퀴즈 참여하기"}
                            href={"/quiz"}
                        />
                    </CardItem>
                    <CardItem>
                        <CardBackground style={{ backgroundColor: "var(--green)" }}>
                            <CardImage />
                        </CardBackground>
                    </CardItem>
                </SectionCard>
                <SectionCard>
                    <CardItem>
                        <CardBackground style={{ backgroundColor: "var(--deepgray)" }}>
                            <CardImage />
                        </CardBackground>
                    </CardItem>
                    <CardItem>
                        <IntroData
                            subtitle={"나의 랭킹은?"}
                            text={
                                "열심히 모은 포인트! 얼마나 되는지 랭킹을 통해 알아보아요."
                            }
                            hasButton={"랭킹 확인하기"}
                            href={"/myPage"}
                        />
                    </CardItem>
                </SectionCard>
                <InsertText>
                    <p>올바른 분리수거는 지구를 구하는 첫 걸음이 될 수 있어요.</p>
                    <Image
                        src={Earth}
                        alt="earth"
                        width={40}
                        height={40}
                    />
                </InsertText>
                <ContentsWrapper>
                    <ContentsForm>
                        <Image
                            src={Eco}
                            alt="eco"
                            width={770}
                            height={400}
                        />
                        <Contents>
                            <SubTitle>우리는 이런것도 제공해요!</SubTitle>
                            <SubText>{`우리 동네 대형폐기물 스티커는\n어디서 발급받을 수 있을까?`}</SubText>
                            <ContentsData onClick={() => router.push("/waste")}>
                                <p>{`우리동네 대형폐기물\n신고하러 가기`}</p>
                                <Image
                                    src={RightArrow}
                                    alt="right-arrow"
                                    width={50}
                                    height={50}
                                />
                            </ContentsData>
                            <SubText>멀쩡한데.. 중고로 팔아볼까?</SubText>
                            <ContentsData onClick={() => router.push("/market")}>
                                <p>{`중고마켓으로 가기`}</p>
                                <Image
                                    src={RightArrow}
                                    alt="right-arrow"
                                    width={50}
                                    height={50}
                                />
                            </ContentsData>
                        </Contents>
                    </ContentsForm>
                </ContentsWrapper>
            </section>
        </main>
    );
};

export default Intro;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`;

const IntroTop = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.25);
    color: white;
`;

const Arrow = styled.button`
    background: none;
    border: none;
    position: absolute;
    top: 80%;
    cursor: pointer;
    animation: up-down 0.4s 0s ease infinite alternate;
    @keyframes up-down {
        0% {
            margin-top: 0px;
        } 
        100% {
            margin-top: 30px;
        } 
    }
`;

const IntroVideo = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const SectionRecyling = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--gray);
`;

const SectionWaste = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: right;
`;

const SectionCard = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
`;

const CardItem = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--gray);
`;

const CardBackground = styled.div`
    width: 100%;
    height: 100%;
`;

const CardImage = styled.div`
    width: 330px;
    height: 330px;
`;

const InsertText = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: var(--font-text);
`;

const ContentsWrapper = styled.div`
    height: 800px;
    background-color: var(--gray);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContentsForm = styled.div`
    width: 1170px;
    height: 600px;
    display: flex;
`;

const Contents = styled.div`
    width: 450px;
    background-color: #305e63;
    color: white;
    padding: 50px 0 30px 50px;
    white-space: pre-wrap;
`;

const SubTitle = styled.div`
    font-size: var(--font-subtitle);
    font-weight: bold;
    margin-bottom: 40px;
`;

const SubText = styled.p`
    font-size: var(--font-text);
    margin-bottom: 20px;
`;

const ContentsData = styled.div`
    width: 330px;
    height: 100px;
    margin-bottom: 50px;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: var(--font-text);
    border: 1px solid white;
    border-radius: 20px;
    cursor: pointer;
    :hover {
        background-color: #294e52;
        border: none;
    }
`;