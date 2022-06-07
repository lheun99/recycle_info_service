import React from "react";
import imgUploadStyles from "../styles/ImgUpload.module.css";

const ImageUpload = () => {
    const dragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("hi");
    };

    const dragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("hello");
    };

    const dragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("buy");
    };

    const fileDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const files = e.dataTransfer.files;
        console.log(files);
    };

    return (
        <div className="container">
            <div
                className={imgUploadStyles.dragImage}
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
            >
                드래그하여 넣어보세요.
            </div>
            <div>
                <label
                    htmlFor="input-file"
                    className={imgUploadStyles.inputImage}
                >
                    사진 업로드
                </label>
                <input
                    type="file"
                    id="input-file"
                    style={{ display: "none" }}
                />
            </div>
        </div>
    );
};

export default ImageUpload;
