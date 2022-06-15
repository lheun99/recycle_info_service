import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import LoginStyles from "../../styles/Login.module.css";
import Image from "next/image";
import Logo from "../../public/images/logo.png";

function Login({ open, handleClose, setRegister }) {
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");

    const validateEmail = (email: String) => {
        return email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const isEmailValid = validateEmail(email);
    const isPasswordValid = password.length >= 4;
    const isFormValid = isEmailValid && isPasswordValid;

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <div className={LoginStyles.login_wrapper}>
            <div style={{ textAlign: "right" }}>
                <Button
                    variant="text"
                    className={LoginStyles.close_button}
                    onClick={handleClose}
                >
                    x
                </Button>
            </div>
            <div className={LoginStyles.logo}>
                <Image
                    src={Logo}
                    alt="logo"
                    width={40}
                    height={40}
                />
            </div>
            <div className={LoginStyles.login_form}>
                <TextField
                    type="email"
                    style={{
                        width: "380px",
                        height: "40px",
                    }}
                    label="E-MAIL"
                    size="small"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    type="password"
                    style={{
                        width: "380px",
                        height: "40px",
                    }}
                    label="PASSWORD"
                    size="small"
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    helperText={
                        isPasswordValid
                            ? ""
                            : "비밀번호는 4글자 이상입니다."
                    }
                />
                <Button
                    className={LoginStyles.login_button}
                    onClick={handleSubmit}
                    disabled={!isFormValid}
                >
                    Sign in
                </Button>
            </div>
            <div className={LoginStyles.or}>or</div>
            <div className={LoginStyles.login_bottom}>
                <Button
                    variant="text"
                    className=""
                >
                    비밀번호 찾기
                </Button>
                <span>|</span>
                <Button
                    variant="text"
                    onClick={() => {
                        handleClose
                        setRegister(true)
                    }}
                >
                    회원가입  
                </Button>
            </div>
        </div>
    )
}

export default Login;
