import React from "react";
import Popup from "reactjs-popup"
import LoginScreen from './login-screen'

import * as style from "../../styles/login"

// login button component with popup for login
export default function LoginButton() {
    return (
        <Popup trigger={<button className="button">Login</button>} modal>
            {close => (
                <div className="modal" style={style.popup}>
                    <a className="close" onClick={close} style={style.closeButton}>
                        &times;
                        </a>
                    <div className="content" style={style.content}>
                        <LoginScreen />
                    </div>
                </div>
            )}
        </Popup>
    );
}