import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import nextArrow from "../../public/images/next.arrow.png";
import pointCoin from "../../public/images/point.coin.png";
import styled from "styled-components";
import Loading from "../shared/Loading";
import { getRecycleInfo } from "../../api";

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

const InfoCarousel = ({ info }) => {
    const [slideIndex, setSlideIndex] = useState(1);
    const [showList, setShowList] = useState([]);
    const router = useRouter(); // 페이지 이동을 위해 useRouter 적용

    const getInfo = async (uniqueCodeArr) => {
        const res = await getRecycleInfo(`recycle-info/search`, {
            code: uniqueCodeArr,
        });
        const searchList = res.data.data;
        setShowList(searchList);
    };

    const nextSlide = () => {
        if (slideIndex === totalInfo.infoList.length) {
            return;
        }
        setSlideIndex(slideIndex + 1);
    };

    const prevSlide = () => {
        if (slideIndex === 1) {
            return;
        }
        setSlideIndex(slideIndex - 1);
    };

    const rendPage = (e: React.MouseEvent<HTMLButtonElement>) => {
        router.push(`/${(e.target as HTMLButtonElement).name}`);
    };

    const getPoint = () => {
        // get 기존 포인트 -> put 추가한 포인트
    };
    useEffect(() => {
        const codeList = new Set(info.map((code) => code.code));
        const uniqueCodeArr = Array.from(codeList);
        getInfo(uniqueCodeArr);
    }, []); // 페이지 오면 바로 데이터 가져옴. 그러나 변환 시간에 따라서, 그 사이는 Loading 으로 보여준다

    return showList.length !== 0 ? (
        <Wrapper>
            <CarouselWrapper>
                <ArrowButton type="button" onClick={prevSlide}>
                    <PrevArrow
                        src={nextArrow}
                        alt="prev arrow"
                        width={35}
                        height={35}
                    />
                </ArrowButton>
                <CarouselAll>
                    {showList.map((info, idx) => {
                        return (
                            <Slider
                                key={`page-${idx}`}
                                className={
                                    slideIndex === idx + 1
                                        ? "is_active"
                                        : "is_pass"
                                }
                            >
                                <MainTitle>
                                    <h2>&apos;{info.code}&apos;</h2>
                                    <h3> (으)로 분리수거 해주세요!</h3>
                                </MainTitle>
                                <p>
                                    &apos;{info.code}&apos;(은)는{" "}
                                    {/* {totalInfo.infoList.map(
                                        (sub) => sub.details + " / "
                                    )} */}
                                    (이)가 있습니다.
                                </p>
                                <InfoBox>
                                    <Image
                                        src={info.infoImg}
                                        alt="recycle-information"
                                        width={400}
                                        height={500}
                                    />
                                </InfoBox>
                                <div>
                                    <span>
                                        {idx + 1} / {showList.length}
                                    </span>
                                </div>
                            </Slider>
                        );
                    })}
                </CarouselAll>

                <ArrowButton type="button" onClick={nextSlide}>
                    <Image
                        src={nextArrow}
                        alt="next arrow"
                        width={35}
                        height={35}
                    />
                </ArrowButton>
            </CarouselWrapper>
            <ButtonWrapper>
                <Button type="button" name="waste" onClick={rendPage}>
                    대형폐기물 신고하기
                </Button>
                <Button type="button" name="market" onClick={rendPage}>
                    중고마켓으로 가기
                </Button>
                <PointButton type="button" onClick={getPoint}>
                    <Image
                        src={pointCoin}
                        alt="point coin"
                        width={35}
                        height={35}
                    />
                    <p>포인트 적립하기</p>
                </PointButton>
            </ButtonWrapper>
        </Wrapper>
    ) : (
        <Loading />
    );
};

export default InfoCarousel;

const Wrapper = styled.div`
    background: #f2f2f2;
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MainTitle = styled.div`
    display: flex;
    align-items: flex-end;
`;
const CarouselWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 800px;
`;
const CarouselAll = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 15px;
    margin: 8px 8px;
    display: flex;
    justify-content: center;
    text-align: center;

    word-break: keep-all;
`;
const Slider = styled.div`
    width: 500px;
    height: 500px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &.is_pass {
        opacity: 0;
        transition: opacity ease-in-out 0.01s;
    }
    &.is_active {
        opacity: 1;
    }
`;
const InfoBox = styled.div`
    height: 80%;
`;
const ArrowButton = styled.button`
    border: none;
    height: 30px;
    cursor: pointer;
`;
const PrevArrow = styled(Image)`
    transform: scaleX(-1);
`;
const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 18px 0;
`;
const Button = styled.button`
    border: none;
    cursor: pointer;
    width: 150px;
    height: 50px;
    margin: 18px 6px;
    background-color: #dedede;
    border-radius: 15px;
    word-break: keep-all;
`;
const PointButton = styled.button`
    display: flex;
    border: none;
    cursor: pointer;
    width: 150px;
    height: 50px;
    margin: 18px 6px;
    background-color: #dedede;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    word-break: keep-all;
`;
