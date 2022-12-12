/* eslint-disable react/prop-types */
import { ReactComponent as ProductActionMinus } from '../../assets/icons/minus.svg'
import { ReactComponent as ProductActionPlus } from '../../assets/icons/plus.svg'
import styles from './Cart.module.css'
import { useState, useContext } from 'react'
import { CartContext } from '../CartContext'

//初始值使用productItems
//當點擊 +- button，進行狀態改變進而從新渲染元件
//狀態的改變是由 CartItem 去做操作

const CartItem = (props) => {
  const { cartContext, setCartContext } = useContext(CartContext)
  const [isQuantity, setQuantity] = useState(props.quantity)

  // onClick calling a function，這裡要注意onClink的寫法(匿名)，不是自動執行，而是被點擊時執行

  // handleMinus
  // 點擊時 item 數量扣 1，同時 item 總價也扣 1 個單價
  // 注意這裡更新狀態的方式，是利用前一個狀態值去處理動作
  // 而不是setQuantity(quantityMinus - 1)，這是直接取代前一狀態值
  function handleMinusClick() {
    setQuantity((quantityMinus) => quantityMinus - 1)
    props.itemTotalPrice((itemTotal) => itemTotal - props.price)
    if (isQuantity > 0) {
      setCartContext(
        cartContext.map((cartItem) =>
          cartItem.id === props.id ? { ...cartItem, quantity: isQuantity - 1 } : cartItem
        )
      )
    }
  }

  // handlePlus
  // 點擊時 item 數量 + 1，同時 item 總價也 + 1 個單價
  function handlePlusClick() {
    setQuantity((quantityPlus) => quantityPlus + 1)
    props.itemTotalPrice((itemTotal) => itemTotal + props.price)
    setCartContext(
      cartContext.map((cartItem) =>
        cartItem.id === props.id ? { ...cartItem, quantity: isQuantity + 1 } : cartItem
      )
    )
  }

  // 判斷數量是否為0
  if (isQuantity > 0) {
    return (
      <div
        key={props.id}
        id={props.id}
        className={`${styles.productContainer} `}
        data-count="0"
        data-price={props.price}>
        <img className={styles.imgContainer} src={props.image} alt={props.image} />
        <div className={styles.productInfo}>
          <div className={styles.productName}>{props.name}</div>
          <div className={styles.productControlContainer}>
            <div className={styles.productControl}>
              <ProductActionMinus className={styles.productAction} onClick={handleMinusClick} />
              <span className={styles.productCount}>{isQuantity}</span>
              <ProductActionPlus className={styles.productAction} onClick={handlePlusClick} />
            </div>
          </div>
          <div className={styles.price}>
            {`單品總價 $`}
            {props.price * isQuantity}
          </div>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}

export default CartItem
