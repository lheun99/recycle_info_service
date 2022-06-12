import React from "react";
import myPageStyles from "../../styles/myPage.module.css";
import UserProfile from "./UserProfile";
import GrowingTree from "./GrowingTree";
import Rank from "./Rank";

const MyPage = () => {
    return (
        <div className={myPageStyles.wrapper}>
            <div className={myPageStyles.profileWrapper}>
                <UserProfile />
            </div>
            <div>
                <div className={myPageStyles.titleWrapper}>
                    <h1>마이 페이지</h1>
                </div>
                <div className={myPageStyles.itemWrapper}>
                    <GrowingTree />
                    <div className={myPageStyles.infoWrapper}>
                        <div className={myPageStyles.pointInfo}>
                            <h2>jaPark 님의 나무</h2>
                            <p>
                                풍성한 열매가 달린 나무가 완성되었어요! <br />
                                지속된 환경에 대한 관심으로 새 생명을 만나게
                                되었습니다!
                            </p>
                            <p>보유한 포인트 : 5300</p>
                        </div>
                        <hr />
                        <Rank />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPage;
