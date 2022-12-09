import styles from './StepThreeCreditcard.module.css'
import CreditCardFormInput from '../../CreditCardFormInput'
import CreditCardForm from '../../CreditCardForm'
// import { useState } from 'react'

function StepThreeCreditcard() {
  const formInitialValues = {
    holderName: '',
    cardNumber: '',
    expireDate: '',
    CVC: ''
  }

  return (
    <form className={styles.Step3CreditCard} data-phase="credit-card">
      <h3 className={styles.formTitle}>付款資訊</h3>
      <section className={styles.formBody}>
        <CreditCardForm formInitialValues={formInitialValues}>
          <div className={styles.col12}>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>持卡人姓名</div>
              <CreditCardFormInput
                label="持卡人姓名"
                name="holderName"
                type="text"
                placeholder="John Doe"
              />
            </div>
          </div>
          <div className={styles.col12}>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>卡號</div>
              <CreditCardFormInput
                label="卡號"
                name="cardNumber"
                type="text"
                placeholder="1111 2222 3333 4444"
              />
            </div>
          </div>
          <div className={styles.col12}>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>有效期限</div>
              <CreditCardFormInput
                label="有效期限"
                name="expireDate"
                type="text"
                placeholder="MM/YY"
              />
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>CVC / CCV</div>
              <CreditCardFormInput label="CVC" name="CVC" type="text" placeholder="123" />
            </div>
          </div>
        </CreditCardForm>
      </section>
    </form>
  )
}

export default StepThreeCreditcard
