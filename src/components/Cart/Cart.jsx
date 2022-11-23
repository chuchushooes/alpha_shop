import styles from './Cart.module.css'
import CartItem from './CartItem'
import { productItems } from '../../assets/data/data.js'
import { useState } from 'react'

function Cart() {
  //初始值使用productItems
  //當點擊 +- button，進行狀態改變進而從新渲染元件
  //狀態的改變是由 CartItem 去做操作
  const [items, setItems] = useState(productItems)

  function TotalPrice({ price }) {
    let total = 0
    price.map((item) => {
      total += item.price * item.quantity
    })
    return total
  }

  return (
    <section className={`${styles.cartContainer} ${styles.colLg5}`}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={`${styles.cartList}`} data-total-price="0">
        <CartItem products={items} setProducts={setItems} />
      </section>
      <div className={styles.cartInfoWrap}>
        <section className={`${styles.cartInfo} ${styles.col12} `}>
          <div className={styles.cartInfoText}>運費</div>
          <div className={styles.cartInfoPrice}>免費</div>
        </section>
        <section className={`${styles.cartInfo} ${styles.col12} `}>
          <div className={styles.cartInfoText}>小計</div>
          <div className={styles.cartInfoPrice}>
            {'$ '}
            <TotalPrice price={items} />
          </div>
        </section>
      </div>
    </section>
  )
}

export default Cart
