import Cart from './components/Cart/Cart'
import Register from './components/Register/Register'
import styles from './App.module.css'
import { useState } from 'react'
import { CreditCardContext, creditCardDefault } from './components/CreditCardFormContext'

function App() {
  const [creditCardInfo, setCreditCardInfo] = useState(creditCardDefault)
  return (
    <main className={styles.siteMain}>
      <div className={styles.mainContainer}>
        <CreditCardContext.Provider value={{ creditCardInfo, setCreditCardInfo }}>
          <Register />
          <Cart />
        </CreditCardContext.Provider>
      </div>
    </main>
  )
}

export default App
