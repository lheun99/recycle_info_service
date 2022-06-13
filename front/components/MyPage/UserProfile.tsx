import React, { useState } from "react";
import Image from "next/image";
import setting from "../../public/setting.png";
import myPageStyles from "../../styles/myPage.module.css";
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
            <Avatar
                alt="user profile"
                src="logo.png"
                sx={{ width: "200px", height: "200px" }}
            />
            <div>
                <h3>jaPark</h3>
            </div>
            <div>
                <h5>jaPark@naver.com</h5>
            </div>
            <div>
                <button
                    type="button"
                    className={myPageStyles.profile_button}
                    onClick={() => setIsEditing(!isEditing)}
                >
                    <Image src={setting} alt="setting button" />
                </button>
            </div>
            {isEditing && (
                <Dialog
                    open={isEditing}
                    onClose={() => setIsEditing((cur) => !cur)}
                >
                    <DialogTitle>프로필 편집</DialogTitle>
                    <DialogContent>
                        <Avatar
                            alt="user profile"
                            src="logo.png"
                            sx={{ width: "200px", height: "200px" }}
                        />
                        <ImageUpload />
                    </DialogContent>
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
