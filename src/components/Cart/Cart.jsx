import styles from './Cart.module.css'
import { ReactComponent as ProductActionMinus} from '../assets/icons/minus.svg'
import { ReactComponent as ProductActionPlus} from '../assets/icons/plus.svg'
import { productItems } from '../assets/data/data.js'



function ProductList () {
  return (
    <>
    {productItems.map((item) => (
        <div key={item.id}  className={`${styles.productContainer} `} data-count="0" data-price={item.price}>
          <img className={styles.imgContainer} src={item.img} alt={item.img} />
              <div className={styles.productInfo}>
                <div className={styles.productName}>{item.name}</div>
                <div className={styles.productControlContainer}>
                  <div className={styles.productControl}>
                    <ProductActionMinus className={styles.productAction}/>
                    <span className={styles.productCount}>{item.quantity}</span>
                    <ProductActionPlus className={styles.productAction}/>
                  </div>
                </div>
                <div className={styles.price}>{item.price}</div>
              </div>
        </div>
    ))}
    </>
  )
}

//require 引入image
export function Cart () {
  return (
    <>
      <h3 className={styles.cartTitle}>購物籃</h3>
        <section className={`${styles.cartList}`} data-total-price="0">
          <ProductList />
        </section>
        <div lassName={styles.cartInfoWrap}>
          <section className={`${styles.cartInfo} ${styles.col12} `}>
            <div className={styles.cartInfoText}>運費</div>
            <div className={styles.cartInfoPrice}>免費</div>
          </section>
          <section className={`${styles.cartInfo} ${styles.col12} `}>
            <div className={styles.cartInfoText}>小計</div>
            <div className={styles.cartInfoPrice}>$0</div>
          </section>
        </div>
    </>
  )
}