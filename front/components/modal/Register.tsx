import React, { useState } from "react";
import { Modal, Button, TextField } from "@mui/material";
import LoginStyles from "../../styles/Login.module.css";
import Image from "next/image";
import Background from "../../public/images/background.jpg";

const Register = ({ open, handleClose, setRegister }) => {
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [confirmPassword, setConfirmPassword] = useState<String>("");

    const validateEmail = (email: String) => {
        return email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    }

    const isEmailValid = validateEmail(email)
    const isPasswordValid = password.length >= 4
    const isPasswordSame = password === confirmPassword
    const isFormValid = isEmailValid && isPasswordValid && isPasswordSame

    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    return (
        <div className={LoginStyles.register}>
            <section className={LoginStyles.register_image}>
                <Image
                    src={Background}
                    alt="background"
                    width={430}
                    height={600}
                    objectFit="cover"
                />
            </section>
            <section className={LoginStyles.register_wrapper}>
                <div style={{ textAlign: "right" }}>
                    <Button
                        variant="text"
                        className={LoginStyles.close_button}
                        onClick={() => {
                            setRegister(false)
                            handleClose()
                        }}
                    >
                        x
                    </Button>
                </div>
                <div className={LoginStyles.register_title}>Create Account</div>
                <div className={LoginStyles.register_form}>
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
                        onChange={(e) => setPassword(e.target.value)}
                        helperText={
                            isPasswordValid
                                ? ""
                                : "비밀번호는 4글자 이상입니다."
                        }
                    />
                    <TextField
                        type="password"
                        style={{
                            width: "380px",
                            height: "40px",
                        }}
                        label="CONFIRM PASSWORD"
                        size="small"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        helperText={
                            isPasswordSame ? "비밀번호는 4글자 이상입니다." : "비밀번호가 일치하지 않습니다."
                        }
                    />
                    <Button
                        variant="text"
                        type="submit"
                        className={LoginStyles.login_button}
                        onClick={() => {
                            handleSubmit
                            setRegister(false)
                        }}
                        disabled={!isFormValid}
                    >
                        Sign up
                    </Button>
                </div>
                <div className={LoginStyles.or}>or</div>
            </section>
        </div>
    )
} 

export default Register;