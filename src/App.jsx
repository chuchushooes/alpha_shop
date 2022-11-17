import StepProgress from './components/StepProgress/StepProgress'
import StepOneAddress from './components/StepOneAddress/StepOneAddress'
import StepTwoShipping from './components/StepTwoShipping/StepTwoShipping'
import StepThreeCreditcard from './components/StepThreeCreditcard/StepThreeCreditcard'
import ProgressControl from './components/ProgressControl/ProgressControl'
import Cart from './components/Cart/Cart'
import styles from './App.module.css'

function App() {
  return (
    <main className={styles.siteMain}>
      <div className={styles.mainContainer}>
        <section className={`${styles.registerContainer} ${styles.colLg6} ${styles.colSm12}`}>
          <h2 className={`${styles.registerTitle} ${styles.col12}`}>結帳</h2>
          <StepProgress />
          <section className={styles.formContainer}>
            <StepOneAddress />
            <StepTwoShipping />
            <StepThreeCreditcard />
          </section>
        </section>
        <Cart />
        <ProgressControl />
      </div>
    </main>
  )
}

export default App
