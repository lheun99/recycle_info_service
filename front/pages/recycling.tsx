import React from "react";
import ImageUpload from "../components/ImageUpload";
import Search from "../components/Search";

const recycling = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#F2F2F2",
            }}
        >
            <div>
                <h1>사물을 찍어주세요!</h1>
                <h5>
                    캔, 병, 과자봉지, 어쩌구 저쩌구 사물 다 상관없어요. <br />
                    무엇이든 분리배출 방법을 알려드려요.
                </h5>
                <ImageUpload />
            </div>

            <div>
                <h1>검색 해보세요!</h1>
                <Search />
            </div>
        </div>
    );
};

export default recycling;
