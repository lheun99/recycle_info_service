import React, { useState, useEffect } from "react";
import Image from "next/image";
import treeOne from "../../public/images/tree/tree.one.png";
import treeTwo from "../../public/images/tree/tree.two.png";
import treeThree from "../../public/images/tree/tree.three.png";
import treeFour from "../../public/images/tree/tree.four.png";
import treeFive from "../../public/images/tree/tree.five.png";
import myPageStyles from "../../styles/myPage.module.css";

const GrowingTree = () => {
    const [pagePointer, setPagePointer] = useState(1); // point 구간에 따라 보여줘야하는 이미지 태그를 선택한다

    const searchPointer = (point: number) => {
        if (point <= 300) {
            return;
        }

        if (300 < point && point <= 1000) {
            setPagePointer(2);
        } else if (1000 < point && point <= 2500) {
            setPagePointer(3);
        } else if (2500 < point && point <= 5000) {
            setPagePointer(4);
        } else {
            setPagePointer(5);
        }
    };

    useEffect(() => {
        // user의 point를 받아 온다
        const point: number = 1000; // 임시 포인트
        searchPointer(point);
    }, [pagePointer]);

    return (
        <div className={myPageStyles.treeWrapper}>
            <div
                className={
                    pagePointer >= 1
                        ? myPageStyles.activeAnim
                        : myPageStyles.trees
                }
            >
                <Image src={treeOne} alt="tree one" height={480} />
            </div>
            <div
                className={
                    pagePointer >= 2
                        ? myPageStyles.activeAnim
                        : myPageStyles.trees
                }
            >
                <Image src={treeTwo} alt="tree two" height={480} />
            </div>

            <div
                className={
                    pagePointer >= 3
                        ? myPageStyles.activeAnim
                        : myPageStyles.trees
                }
            >
                <Image src={treeThree} alt="tree three" height={480} />
            </div>
            <div
                className={
                    pagePointer >= 4
                        ? myPageStyles.activeAnim
                        : myPageStyles.trees
                }
            >
                <Image src={treeFour} alt="tree four" height={480} />
            </div>
            <div
                className={
                    pagePointer >= 5
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
