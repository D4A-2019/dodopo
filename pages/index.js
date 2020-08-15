import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ProductCard from '../components/product-card/product-card'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
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
