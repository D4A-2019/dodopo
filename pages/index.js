import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ProductCard from '../components/product-card/product-card'

import { useEffect, useState } from "react"

import LoginButton from "../components/login/login-button"
import LogoutButton from "../components/login/logout-button"

export default function Home() {
    // state to determine if a user is logged in or not
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // effect to check if ACCESS_TOKEN is null or not
    // if ACCESS_TOKEN is not null, then the user is logged in
    useEffect(() => {
        if (localStorage.getItem("ACCESS_TOKEN") != null) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Dodopo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                {isLoggedIn ? (
                    <LogoutButton />
                ) : (
                    <LoginButton />
                )}
                <ProductCard 
                    imagesrc="http://code.slicecrowd.com/labs/4/images/t-shirt.png"
                    productName="I feel like Pablo"
                    productSeller="Yeezy"
                    sizes="S , M , L , XL"
                    price="$129"
                />
            </main>
        </div>
    )
}
