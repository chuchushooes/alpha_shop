import StepProgress from './StepProgress/StepProgress'
import StepOneAddress from './StepOneAddress/StepOneAddress'
import StepTwoShipping from './StepTwoShipping/StepTwoShipping'
import StepThreeCreditcard from './StepThreeCreditcard/StepThreeCreditcard'
import ProgressControl from './ProgressControl/ProgressControl'
import styles from './Register.module.css'

function Register() {
  return (
    <section className={`${styles.registerContainer} ${styles.colLg6} ${styles.colSm12}`}>
      <h2 className={`${styles.registerTitle} ${styles.col12}`}>結帳</h2>
      <StepProgress />
      <section className={styles.formContainer}>
        <StepOneAddress />
        <StepTwoShipping />
        <StepThreeCreditcard />
      </section>
      <ProgressControl />
    </section>
  )
}

export default Register
