import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Search from "./Search"
import Map from "./Map"

const ReportWaste = () => {
    const [mapData, setMapData] = useState<String[] | null>(null);
    const handleSetMapData = (data: String[]) => {
        setMapData(data);
    }

    return (
        <Wrapper>
            <h1>우리동네 대형폐기물 신고하기</h1>
            <Contents>
                {"대형폐기물은 구청/주민센터에서 납부 필증을 구매 후 버려야합니다.\n우리동네 어디에서 신고할 수 있는지 알아볼까요?"}
            </Contents>
            <Form>
                <Title>우리동네 사이트 찾기</Title>
                <div>
                    <Search handleSetMapData={handleSetMapData} />
                </div>
                <MapContainer id="map">
                    <Map mapData={mapData} />
                </MapContainer>
                <MapInfo>
                    <p>
                        { mapData ? (
                            <MapInfoData>
                                <ImageWrapper>
                                    <Image
                                        src={mapData[0]["banner_image"]}
                                        alt="banner_image"
                                        width={100}
                                        height={40}
                                        unoptimized={true}
                                    />
                                </ImageWrapper>
                                <div>
                                    <div>주소 : {mapData[0]["address"]}</div>
                                    <div>전화번호 : {mapData[0]["tel"]}</div>
                                    <div><a href={mapData[0]["url1"]}>우리동네 공식 홈페이지 바로가기 </a></div>
                                    <div><a href={mapData[0]["url2"]}>대형폐기물 배출신고 안내 바로가기 </a></div>
                                </div>
                            </MapInfoData>
                        ) : "검색 결과를 확인하세요!" }
                    </p>
                </MapInfo>
            </Form>
            <p>Tip! 대형폐기물은 무료로  수거가 가능하기도 해요!</p>
        </Wrapper>
    );
};

export default ReportWaste;


const Wrapper = styled.div`
    width: 100%;
    height: 1100px;
    background-color: var(--gray);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 40px;
`;

const Contents = styled.p`
    white-space: pre-wrap;
    text-align: center;
`;

const Form = styled.div`
    width: 800px;
    height: 750px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 60px;
    border-radius: 20px;
`;

const Title = styled.h2`
    width: 100%;
    height: 70px;
    margin: 0;
    padding-top: 15px;
    background-color: var(--green);
    text-align: center;
    border-radius: 20px 20px 0 0;
`;

const MapContainer = styled.div`
    width: 650px;
    height: 340px;
`;

const MapInfo = styled.div`
    width: 650px;
    height: 110px;
    border: 1px dashed #c4c4c4;
    padding-left: 20px;
    font-size: 0.8rem;
`;

const MapInfoData = styled.div`
    display: flex;
    align-items: center;
    // justify-content: space-between;
`;

const ImageWrapper = styled.div`
    width: 120px;
    height: 70px;
`;