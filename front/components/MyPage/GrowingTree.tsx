import React from "react";
import Image from "next/image";
import successTree from "../../public/tree.success.png";
import myPageStyles from "../../styles/myPage.module.css";

const GrowingTree = () => {
    return (
        <div className={myPageStyles.treeWrapper}>
            <Image
                src={successTree}
                alt="tree success"
                width={250}
                height={350}
            />
        </div>
    );
};

export default GrowingTree;
