import styles from './Cart.module.css'
import CartItem from './CartItem'
import { productItems } from '../assets/data/data.js'

//把 CartItem 獨立出來放入要傳遞的props,key代表item的id、price代表item的price
//傳遞到 CartItem 時，將 item 內的 props(是物件) 物件解構賦值
//如果用...item 得到的物件會像 data.js 內物件，就不用重新賦予變數
/*
id: '1',
name: '貓咪罐罐',
img: 'https://picsum.photos/300/300?text=1',
price: 100,
quantity: 2,
*/
function ProductList() {
  return (
    <>
      {productItems.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          imgUrl={item.img}
          name={item.name}
          quantity={item.quantity}
          id={item.id}
        />
      ))}
    </>
  )
}

//require 引入image
function Cart() {
  return (
    <section className={`${styles.cartContainer} ${styles.colLg5}`}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={`${styles.cartList}`} data-total-price="0">
        <ProductList />
      </section>
      <div className={styles.cartInfoWrap}>
        <section className={`${styles.cartInfo} ${styles.col12} `}>
          <div className={styles.cartInfoText}>運費</div>
          <div className={styles.cartInfoPrice}>免費</div>
        </section>
        <section className={`${styles.cartInfo} ${styles.col12} `}>
          <div className={styles.cartInfoText}>小計</div>
          <div className={styles.cartInfoPrice}>$0</div>
        </section>
      </div>
    </section>
  )
}

export default Cart
