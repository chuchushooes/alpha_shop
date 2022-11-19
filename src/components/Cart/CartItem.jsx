import { ReactComponent as ProductActionMinus } from '../assets/icons/minus.svg'
import { ReactComponent as ProductActionPlus } from '../assets/icons/plus.svg'
import styles from './Cart.module.css'

//接收到父元件的props
function CartItem({ products, setProducts }) {
  // onClick calling a function，這裡要注意onClink的寫法(匿名)，不是自動執行，而是被點擊時執行
  // handleMinus
  function handleMinusClick(CartItemId) {
    let NewProductList = products.map((product) => {
      if (product.id === CartItemId) {
        return {
          // Create a *new* object with changes，這裡注意要新增新物件避免mutable
          ...product,
          quantity: product.quantity - 1
        }
      } else {
        return product
      }
    })
    //每次扣完都會重新生出一個array
    NewProductList = NewProductList.filter((product) => product.quantity > 0)
    setProducts(NewProductList)
  }
  // handlePlus
  function handlePlusClick(CartItemId) {
    const NewProductList = products.map((product) => {
      if (product.id === CartItemId) {
        return {
          // Create a *new* object with changes
          ...product,
          quantity: product.quantity + 1
        }
      } else {
        return product
      }
    })
    setProducts(NewProductList)
  }
  return (
    <>
      {products.map((CartItem) => (
        <div
          key={CartItem.id}
          id={CartItem.id}
          className={`${styles.productContainer} `}
          data-count="0"
          data-price={CartItem.price}>
          <img className={styles.imgContainer} src={CartItem.img} alt={CartItem.imgUrl} />
          <div className={styles.productInfo}>
            <div className={styles.productName}>{CartItem.name}</div>
            <div className={styles.productControlContainer}>
              <div className={styles.productControl}>
                <ProductActionMinus
                  className={styles.productAction}
                  onClick={() => handleMinusClick(CartItem.id)}
                />
                <span className={styles.productCount}>{CartItem.quantity}</span>
                <ProductActionPlus
                  className={styles.productAction}
                  onClick={() => handlePlusClick(CartItem.id)}
                />
              </div>
            </div>
            <div className={styles.price}>
              {`單價 $`}
              {CartItem.price}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CartItem
