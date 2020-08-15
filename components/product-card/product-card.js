import styles from "../../styles/product-card"

//product card from https://codepen.io/slicecrowd/pen/GWJEZB
//edited by irsyad
export default function ProductCard() {
    return (
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
    );
}