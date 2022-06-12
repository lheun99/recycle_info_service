import React from "react";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import setting from "../../public/setting.png";
import myPageStyles from "../../styles/myPage.module.css";

const UserProfile = () => {
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
                <button type="button" className={myPageStyles.profile_button}>
                    <Image src={setting} alt="setting button" />
                </button>
            </div>
        </div>
    );
};

export default UserProfile;
