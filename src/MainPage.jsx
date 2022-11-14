import {StepProgress} from './components/main/StepProgress.jsx'
import {StepOneAddress} from './components/main/StepOneAddress.jsx'
import {StepTwoShipping} from './components/main/StepTwoShipping.jsx'
import {StepThreeCreditcard} from './components/main/StepThreeCreditcard.jsx'
import {ProgressControl} from './components/main/ProgressControl.jsx'
import {Cart} from './components/main/Cart.jsx'
import styles from './css/mainPage.module.css'


export default function MainPage () {
  return (
    <main className={`${styles} ${styles.siteMain}`}>
        <div className={styles.mainContainer}>
            <section className={`${styles.registerContainer} ${styles.colLg6} ${styles.colSm12}`}>
                <h2 className={`${styles.registerTitle} ${styles.col12}`}>結帳</h2>
                <StepProgress/> 
                <section className={styles.formContainer}>
                  <StepOneAddress />
                  <StepTwoShipping />
                  <StepThreeCreditcard />
                </section>
            </section>
            <section class={`${styles.cartContainer} ${styles.colLg5}`}>
                <Cart/>
            </section>
            <section class={styles.progressControlContainer}>
              <ProgressControl/>
            </section>
        </div>
    </main>
  )
}