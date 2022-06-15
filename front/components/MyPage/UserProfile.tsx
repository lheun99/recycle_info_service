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
import ImageUpload from "../recycling/ImageUpload";

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
                            <ImageUpload />
                        </UploadWrapper>
                    </ProfileEdit>
                    <DialogActions>
                        <button>변경하기</button>
                        <button>취소하기</button>
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
    padding-top: 10px;
`;
