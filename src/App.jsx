import Cart from './components/Cart/Cart'
import Register from './components/Register/Register'
import styles from './App.module.css'

function App() {
  return (
    <main className={styles.siteMain}>
      <div className={styles.mainContainer}>
        <Register />
        <Cart />
      </div>
    </main>
  )
}

export default App
