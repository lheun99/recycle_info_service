import React, { useState } from "react";
import Image from "next/image";
import setting from "../../public/images/setting.png";
import styled from "styled-components";
import {
    Avatar,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";
import ImageUpload from "../shared/ImageUpload";

const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div>
            {" "}
            <ProfileImg alt="user profile" src="images/default.profile.png" />
            <div>
                <h3>jaPark</h3>
            </div>
            <div>
                <h5>jaPark@naver.com</h5>
            </div>
            <div>
                <EditButton
                    type="button"
                    onClick={() => setIsEditing(!isEditing)}
                >
                    <Image src={setting} alt="setting button" />
                </EditButton>
            </div>
            {isEditing && (
                <Dialog
                    open={isEditing}
                    onClose={() => setIsEditing((cur) => !cur)}
                >
                    <EditTitle>프로필 편집</EditTitle>
                    <ProfileEdit>
                        <ProfileImg
                            alt="user profile"
                            src="images/default.profile.png"
                        />
                        <UploadWrapper>
                            <ImageUpload width={450} height={300} />
                        </UploadWrapper>
                    </ProfileEdit>
                    <DialogActions>
                        <Button>변경하기</Button>
                        <Button>취소하기</Button>
                    </DialogActions>
                </Dialog>
            )}
        </div>
    );
};

export default UserProfile;

const ProfileImg = styled(Avatar)`
    border: 2px dashed #a7c4bc;
    width: 200px;
    height: 200px;
`;
const EditButton = styled.button`
    border: none;
    cursor: pointer;
`;

const ProfileEdit = styled(DialogContent)`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 10px;
`;

const EditTitle = styled(DialogTitle)`
    font-family: Elice Digital Baeum;
`;
const UploadWrapper = styled.div`
    padding: 15px 10px 0 10px;
`;
const Button = styled.button`
    font-family: Elice Digital Baeum;
    border: none;
    cursor: pointer;
    background-color: #f2f2f2;
    color: black;
    width: 100px;
    height: 25px;
    border-radius: 15px;
`;
