import React from "react";
import styled from "styled-components";
import UserProfile from "./UserProfile";
import GrowingTree from "./GrowingTree";
import Rank from "./Rank";

const MyPage = () => {
    return (
        <Wrapper>
            <ProfileWrapper>
                <UserProfile />
            </ProfileWrapper>
            <div>
                <TitleWrapper>
                    <Title>마이 페이지</Title>
                </TitleWrapper>
                <ItemWrapper>
                    <GrowingTree />
                    <InfoWrapper>
                        <PointInfo>
                            <h2>jaPark 님의 나무</h2>
                            <p>
                                풍성한 열매가 달린 나무가 완성되었어요! <br />
                                지속된 환경에 대한 관심으로 새 생명을 만나게
                                되었습니다!
                            </p>
                            <p>보유한 포인트 : 5300</p>
                        </PointInfo>
                        <RankInfo>
                            <Rank />
                        </RankInfo>
                    </InfoWrapper>
                </ItemWrapper>
            </div>
        </Wrapper>
    );
};

export default MyPage;

const Wrapper = styled.div`
    display: grid;
    width: 100%;
    height: 800px;
    grid-template-columns: 1.3fr 4fr;
    background-color: var(--gray);
    padding-top: 60px;
`;
const ProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 60px;
    border-right: 2px solid #a7c4bc;
    text-align: center;
`;
const TitleWrapper = styled.div`
    text-align: center;
    background-color: var(--green);
    height: 10%;
`;
const Title = styled.h1`
    margin: 0;
    padding: 11px 0;
`;
const ItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    height: 90%;
`;
const InfoWrapper = styled.div`
    border-left: 1px solid #a7c4bc;
`;
const PointInfo = styled.div`
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 25px;
    border-bottom: 1px solid #a7c4bc;
`;
const RankInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 25px;
`;
