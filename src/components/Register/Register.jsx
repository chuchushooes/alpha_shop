import StepProgress from './StepProgress/StepProgress'
import StepOneAddress from './StepOneAddress/StepOneAddress'
import StepTwoShipping from './StepTwoShipping/StepTwoShipping'
import StepThreeCreditcard from './StepThreeCreditcard/StepThreeCreditcard'
import ProgressControl from './ProgressControl/ProgressControl'
import styles from './Register.module.css'
import { useState } from 'react'

//傳遞 props 給 StepProgress 和 ProgressControl，去做 useState 控制
//條件式控制渲染的頁面，使用&&，判斷 currentStep 進行切換
function Register() {
  const [currentStep, setStep] = useState(1)
  return (
    <section className={`${styles.registerContainer} ${styles.colLg6} ${styles.colSm12}`}>
      <h2 className={`${styles.registerTitle} ${styles.col12}`}>結帳</h2>
      <StepProgress currentStep={currentStep} />
      <section className={styles.formContainer}>
        {currentStep === 1 && <StepOneAddress />}
        {currentStep === 2 && <StepTwoShipping />}
        {currentStep === 3 && <StepThreeCreditcard />}
      </section>
      <ProgressControl currentStep={currentStep} onClick={setStep} />
    </section>
  )
}

export default Register
