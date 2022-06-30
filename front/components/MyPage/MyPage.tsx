import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import UserProfile from "./UserProfile";
import GrowingTree from "./GrowingTree";
import Rank from "./Rank";
import { UserStateContext } from "../../pages/_app";
import { get } from "../../api";
import { useMediaQuery } from "react-responsive";

// mypage main component 에서 point를 조회하고 멘트 적용 및 props로 하위 컴포넌트에 전달

const MyPage = () => {
    const [user, setUser] = useState({
        email: "",
        nickname: "",
        picture: "",
        point: "",
        rank: "",
        rankers: [],
    });
    const userInfo = useContext(UserStateContext);
    const id = userInfo.user?.userId;
    const isMobile = useMediaQuery({ query: '(max-width: 800px)' })

    const getUserInfo = async () => {
        const res = await get(`users/${id}/myPage`);
        const userAll = res.data.data;

        setUser({
            email: userAll.email,
            nickname: userAll.nickname,
            picture: userAll.picture,
            point: userAll.rank?.total ?? 0,
            rank: userAll.rank?.rank ?? "",
            rankers: userAll.rankers ?? "",
        });
    };

    useEffect(() => {
        getUserInfo();
    }, [user]);

    return (
        <Wrapper>
            {
                !isMobile && (
                    <ProfileWrapper>
                        <UserProfile user={user} setUser={setUser} userId={id} />
                    </ProfileWrapper>
                )
            }
            <InnerWrapper>
                <TitleWrapper>
                    <Title>마이 페이지</Title>
                </TitleWrapper>
                <ItemWrapper>
                    <GrowingTree point={user?.point} />
                    <InfoWrapper>
                        <PointInfo>
                            <h3>{user?.nickname} 님의 나무</h3>
                            <div>
                                풍성한 열매가 달린 나무가 완성되었어요! <br />
                                지속된 환경에 대한 관심으로 새 생명을 만나게
                                되었습니다!
                            </div>
                            <p>보유한 포인트 : {user?.point}</p>
                        </PointInfo>
                        <RankInfo>
                            <Rank user={user} />
                        </RankInfo>
                    </InfoWrapper>
                </ItemWrapper>
            </InnerWrapper>
        </Wrapper>
    );
};

export default MyPage;

const Wrapper = styled.div`
    display: grid;
    width: 100%;
    height: 700px;
    grid-template-columns: 1.3fr 4fr;
    background-color: var(--gray);
    padding-top: 60px;
    @media screen and (max-width: 800px) {
        display: flex;
    };
`;

const InnerWrapper = styled.div`
    width: 100%;
    height: 100%;
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
    height: 70px;
`;

const Title = styled.h2`
    margin: 0;
    padding-top: 15px;
`;

const ItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.4fr 0.6fr;
    height: 85%;
`;

const InfoWrapper = styled.div`
    border-left: 1px solid #a7c4bc;
    height: 100%;
`;

const PointInfo = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 25px;
    border-bottom: 1px solid #a7c4bc;
`;

const RankInfo = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 25px;
`;
