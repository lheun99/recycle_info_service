import React, {
    useState,
    useEffect,
    Dispatch,
    SetStateAction,
    useRef,
} from "react";
import Image from "next/image";
import { sendImageFile } from "../../api";
import instax from "../../public/images/Instax.png";
import styled from "styled-components";

type ImageUploadProps = {
    setOpenInfo?: Dispatch<SetStateAction<boolean>>;
    setInfo?: Dispatch<SetStateAction<Object>>;
    setImgUrl?: Dispatch<SetStateAction<string | ArrayBuffer>>;
};

const MobileCamera = ({
    setImgUrl,
    setOpenInfo,
    setInfo,
}: ImageUploadProps) => {
    const [isCameraOn, setIsCameraOn] = useState(false);

    // image preview를 위한 함수
    const encodeFileToBase64 = (file: Blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImgUrl(reader.result);
                resolve(reader.result);
            };
        });
    };

    const sendImage = async (file: Blob) => {
        console.log(file);
        try {
            encodeFileToBase64(file);
            const formData = new FormData();
            formData.append("image", file);
            console.log(formData.getAll("image")); // formData에 잘 들어가는지 확인
            const res = await sendImageFile("recycle-info/img", formData);
            const info = res?.data?.data.imgInfo;
            setInfo(info);
            setOpenInfo(true);
        } catch (e) {
            console.error(e);
            alert("다시 시도 해주세요!");
            location.reload();
        }
    };

    return isCameraOn ? (
        <>
            <div>
                <InputLabel htmlFor="input-mobile-file">
                    한번 더 클릭!
                </InputLabel>
                <input
                    type="file"
                    id="input-mobile-file"
                    accept="image/*"
                    style={{ display: "none" }}
                    capture="environment"
                    onChange={(e) => sendImage(e.target.files[0])}
                />
            </div>
        </>
    ) : (
        <Wrapper>
            <Image src={instax} alt="camera" width={250} height={250} />
            <div>
                <Button
                    onClick={
                        () => {
                            setIsCameraOn(true);
                        }
                        // 카메라 종료
                    }
                >
                    찰~~카악
                </Button>
            </div>
        </Wrapper>
    );
};

export default MobileCamera;

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InputLabel = styled.label`
    cursor: pointer;
    background-color: #dedede;
    padding: 7px 30px;
    border-radius: 15px;
`;

const Button = styled.button`
    border: none;
    cursor: pointer;
    width: 150px;
    height: 50px;
    margin: 20px 6px;
    background-color: #dedede;
    border-radius: 15px;
    word-break: keep-all;
    font-family: Elice Digital Baeum;
    font-weight: bold;
`;
