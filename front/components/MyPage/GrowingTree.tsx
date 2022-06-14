import React, { useState, useEffect } from "react";
import Image from "next/image";
import treeOne from "../../public/images/tree/tree.one.png";
import treeTwo from "../../public/images/tree/tree.two.png";
import treeThree from "../../public/images/tree/tree.three.png";
import treeFour from "../../public/images/tree/tree.four.png";
import treeFive from "../../public/images/tree/tree.five.png";
import myPageStyles from "../../styles/myPage.module.css";

const GrowingTree = () => {
    const [pagePointer, setPagePointer] = useState("one"); // point 구간에 따라 보여줘야하는 이미지 태그를 선택한다

    const searchPointer = (point: number) => {
        if (point <= 300) {
            return;
        }

        if (300 < point && point <= 1000) {
            setPagePointer("two");
        } else if (1000 < point && point <= 2500) {
            setPagePointer("three");
        } else if (2500 < point && point <= 5000) {
            setPagePointer("four");
        } else {
            setPagePointer("five");
        }
    };

    useEffect(() => {
        // user의 point를 받아 온다
        const point: number = 15000; // 임시 포인트
        searchPointer(point);
    }, [pagePointer]);

    return (
        <div className={myPageStyles.treeWrapper}>
            <div
                className={
                    pagePointer === "one"
                        ? myPageStyles.activeAnim
                        : myPageStyles.trees
                }
            >
                <Image src={treeOne} alt="tree one" height={480} />
            </div>
            <div
                className={
                    pagePointer === "two"
                        ? myPageStyles.activeAnim
                        : myPageStyles.trees
                }
            >
                <Image src={treeTwo} alt="tree two" height={480} />
            </div>

            <div
                className={
                    pagePointer === "three"
                        ? myPageStyles.activeAnim
                        : myPageStyles.trees
                }
            >
                <Image src={treeThree} alt="tree three" height={480} />
            </div>
            <div
                className={
                    pagePointer === "four"
                        ? myPageStyles.activeAnim
                        : myPageStyles.trees
                }
            >
                <Image src={treeFour} alt="tree four" height={480} />
            </div>
            <div
                className={
                    pagePointer === "five"
                        ? myPageStyles.activeAnim
                        : myPageStyles.trees
                }
            >
                <Image src={treeFive} alt="tree five" height={480} />
            </div>
        </div>
    );
};

export default GrowingTree;
