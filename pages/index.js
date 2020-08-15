import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      
        <div className={styles.elwrapper}>
          <div className={styles.boxup}>
            <img className={styles.img} src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt=""></img>
            <div className={styles.imginfo}>
              <div className={styles.infoinner}>
                <span className={styles.pname}>I feel like Pablo</span>
                <span className={styles.pcompany}>Yeezy</span>
              </div>
              <div className={styles.asize}>Available sizes : <span className={styles.size}>S , M , L , XL</span></div>
            </div>
          </div>

          <div className={styles.boxdown}>
            <span className={styles.price}>$129</span>
            <a className={styles.cart} href="#">
              <span className={styles.addtocart}>
                <span className={styles.txt}>Add to cart</span>
              </span>
            </a>
          </div>
        </div>
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
