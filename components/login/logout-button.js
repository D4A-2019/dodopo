import React from 'react';

export default function LogoutButton() {
    // function to log out the user
    // if the user has already logged in of course
    const logOut = () => {
        localStorage.removeItem("ACCESS_TOKEN");
        window.location.reload();
    };

    return (
        <button onClick={logOut}>Log Out</button>
    );
}