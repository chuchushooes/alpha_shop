import Cart from './components/Cart/Cart'
import Register from './components/Register/Register'
import styles from './App.module.css'
import { useState } from 'react'
import { CreditCardContext, creditCardDefault } from './components/CreditCardFormContext'
import { CartContext, productItems } from './components/CartContext'

function App() {
  const [cartContext, setCartContext] = useState(productItems)
  const [creditCardInfo, setCreditCardInfo] = useState(creditCardDefault)
  return (
    <main className={styles.siteMain}>
      <div className={styles.mainContainer}>
        <CreditCardContext.Provider value={{ creditCardInfo, setCreditCardInfo }}>
          <CartContext.Provider value={{ cartContext, setCartContext }}>
            <Register />
            <Cart />
          </CartContext.Provider>
        </CreditCardContext.Provider>
      </div>
    </main>
  )
}

export default App
