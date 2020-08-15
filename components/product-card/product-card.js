import styles from "./../../styles/product-card.module.css"

//product card from https://codepen.io/slicecrowd/pen/GWJEZB
//edited by irsyad
export default function ProductCard(props) {
    return (
        <div className={styles.elwrapper}>
            <div className={styles.boxup}>
                <img className={styles.img} src={props.imagesrc} alt=""></img>
                <div className={styles.imginfo}>
                    <div className={styles.infoinner}>
                        <span className={styles.pname}>{props.productName}</span>
                        <span className={styles.pcompany}>{props.productSeller}</span>
                    </div>
                    <div className={styles.asize}>Available sizes : <span className={styles.size}>{props.sizes}</span></div>
                </div>
            </div>

            <div className={styles.boxdown}>
                <span className={styles.price}>{props.price}</span>
                <a className={styles.cart} href="#">
                    <span className={styles.addtocart}>
                        <span className={styles.txt}>Add to cart</span>
                    </span>
                </a>
            </div>
        </div>
    );
}