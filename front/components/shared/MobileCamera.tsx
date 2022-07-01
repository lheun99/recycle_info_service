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
    const [isUploaded, setIsUploaded] = useState("standBy");
    // img upload 상태 : ["standBy"] "대기, 아직 아무것도 일어나지 않음" / ["loading"] "서버에 img를 보내고 결과를 기다림" / ["complete"] "결과를 저장하고 라우팅할 것"
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
        try {
            encodeFileToBase64(file);
            setIsUploaded("loading");
            const formData = new FormData();
            formData.append("image", file);
            const res = await sendImageFile("recycle-info/img", formData);
            const info = res?.data?.data.imgInfo;
            setInfo(info);
            setOpenInfo(true);
            setIsUploaded("complete");
        } catch (e) {
            console.error(e);
            alert("다시 시도 해주세요!");
            location.reload();
        }
    };

    return isUploaded !== "loading" ? (
        isCameraOn ? (
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
        )
    ) : (
        <p>결과를 기다려주세요!</p>
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
