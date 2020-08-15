import React from 'react';
import Cotter from 'cotter';
import { useEffect, useState } from "react";

export default function LoginScreen() {

    useEffect(() => {
        const API_KEY_ID = "78f6bb00-ea4f-4a8e-bd70-d60c4f71e564";
        var cotter = new Cotter(API_KEY_ID);
        cotter
            .signInWithOTP()
            .showEmailForm()
            .then(payload => {
                console.log(payload);

                // change state to logged in
                localStorage.setItem("ACCESS_TOKEN", payload.oauth_token.access_token);
                window.location.reload();
            })
            .catch(err => console.log(err));
    }, []);
    
    return (
        <div id="cotter-form-container" style={{ width: 300, height: 300 }} />
    )
}