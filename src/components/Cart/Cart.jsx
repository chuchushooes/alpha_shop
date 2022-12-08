import styles from './Cart.module.css'
import CartItem from './CartItem'
import { productItems } from '../../assets/data/data.js'
import { useState } from 'react'

function Cart() {
  //設定TTL值，當count改變就會重新渲染
  const [itemPrice, setItemPrice] = useState(0)
  let total = 0

  return (
    <section className={`${styles.cartContainer} ${styles.colLg5}`}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={`${styles.cartList}`} data-total-price="0">
        {productItems.map((item) => {
          total += item.price * item.quantity //小計的預設值(data數量*價錢)
          return (
            <CartItem
              key={item.id}
              price={item.price}
              image={item.img}
              name={item.name}
              quantity={item.quantity}
              itemTotalPrice={setItemPrice}
            />
          )
        })}
      </section>
      <div className={styles.cartInfoWrap}>
        <section className={`${styles.cartInfo} ${styles.col12} `}>
          <div className={styles.cartInfoText}>運費</div>
          <div className={styles.cartInfoPrice}>免費</div>
        </section>
        <section className={`${styles.cartInfo} ${styles.col12} `}>
          <div className={styles.cartInfoText}>小計</div>
          <div className={styles.cartInfoPrice}>{total + itemPrice}</div>
        </section>
      </div>
    </section>
  )
}

export default Cart
