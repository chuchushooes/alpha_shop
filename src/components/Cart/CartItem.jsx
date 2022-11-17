import { ReactComponent as ProductActionMinus } from '../assets/icons/minus.svg'
import { ReactComponent as ProductActionPlus } from '../assets/icons/plus.svg'
import styles from './Cart.module.css'

function CartItem({ ...CartItem }) {
  // console.log(CartItem)

  return (
    <div
      key={CartItem.id}
      id={CartItem.id}
      className={`${styles.productContainer} `}
      data-count="0"
      data-price={CartItem.price}>
      <img className={styles.imgContainer} src={CartItem.imgUrl} alt={CartItem.imgUrl} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{CartItem.name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <ProductActionMinus className={styles.productAction} />
            <span className={styles.productCount}>{CartItem.quantity}</span>
            <ProductActionPlus className={styles.productAction} />
          </div>
        </div>
        <div className={styles.price}>{CartItem.price}</div>
      </div>
    </div>
  )
}

export default CartItem
