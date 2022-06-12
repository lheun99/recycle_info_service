import React from "react";
import myPageStyles from "../../styles/myPage.module.css";

// 정보를 받아올 땐, map을 사용하여 1~3위를 불러올 예정 입니다

const Rank = () => {
    return (
        <div>
            <h3>랭킹</h3>
            <p>현재 jaPark 님은 2위 입니다.</p>
            <div>
                <div className={myPageStyles.RankWrapper}>
                    <p>
                        🥇 1위 <b>jinah777</b>
                    </p>
                    <p>
                        <b>15,500</b> 포인트
                    </p>
                </div>
                <div className={myPageStyles.RankWrapper}>
                    <p>
                        🥈 2위 <b>jaPark</b>{" "}
                    </p>
                    <p>
                        <b>5,300</b> 포인트
                    </p>
                </div>
                <div className={myPageStyles.RankWrapper}>
                    <p>
                        🥉 3위 <b>aa</b>
                    </p>
                    <p>
                        <b>1,500</b> 포인트
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Rank;
