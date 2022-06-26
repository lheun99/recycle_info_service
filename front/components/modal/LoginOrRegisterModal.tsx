import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Modal from '@mui/material/Modal';

const LoginOrRegisterModal = ({ open, handleClose }) => {
    const [register, setRegister] = useState<Boolean>(false);

    const Wrapper = React.forwardRef((props: any, ref: any) => (
        <span {...props} ref={ref}>
            {props.children}
        </span>
    ));

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {
                register ? (
                    <Register
                        handleClose={handleClose}
                        setRegister={setRegister}
                    />
                ) : (
                    <Login
                        handleClose={handleClose}
                        setRegister={setRegister}
                    />
                )
            }
        </Modal>
    )
}

export default LoginOrRegisterModal;