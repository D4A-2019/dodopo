import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Cotter from "cotter";
import { useEffect, useState } from "react";

export default function Home() {
  // state to determine if a user is logged in or not
  var [isLoggedIn, setIsLoggedIn] = useState(false);

  // login form generator
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
        setIsLoggedIn(true);
      })
      .catch(err => console.log(err));
  }, []);

  // effect to check if ACCESS_TOKEN is null or not
  // if ACCESS_TOKEN is not null, then the user is logged in
  useEffect(() => {
    if (localStorage.getItem("ACCESS_TOKEN") != null) {
      setIsLoggedIn(true);
    }
  }, []);

  // function to log out the user
  // if the user has already logged in of course
  const logOut = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    setIsLoggedIn(false);
  };


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>LO Gw do'aIN</div>
        <div id="cotter-form-container" style={{ width: 300, height: 300 }} />
        {isLoggedIn ? (
          <div
            className="card"
            style={{ padding: 10, margin: 5 }}
            onClick={logOut}
          >
            Log Out
          </div>
        ) : null}

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
