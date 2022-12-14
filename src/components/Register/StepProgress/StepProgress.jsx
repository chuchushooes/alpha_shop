// import { ReactComponent as PgComplete } from '../../assets/icons/pg-complete.svg' //將 SVG 圖檔包裝為 Component
import styles from './StepProgress.module.css'
import PropTypes from 'prop-types'

StepProgress.propTypes = {
  currentStep: PropTypes.number,
  onClick: PropTypes.func
}

//由父層 Register 接收 currentStep 變數，去做選擇判斷操控css
function StepProgress(props) {
  return (
    <section className={styles.progressContainer}>
      <span className={styles.progressGroup} data-phase="address">
        <span className={props.currentStep === 1 ? styles.progressIconActive : styles.progressIcon}>
          <span className={props.currentStep !== 1 ? styles.textDisplayNone : styles.text}>1</span>
          <svg className={`${styles.icon} ${styles.cursorPoint}`}></svg>
        </span>
        <span
          className={props.currentStep === 1 ? styles.progressLabelActive : styles.progressLabel}>
          寄送地址
        </span>
      </span>
      <span
        className={props.currentStep === 1 ? styles.progressBarActive : styles.progressBar}
        data-order="1"></span>
      <span className={styles.progressGroup} data-phase="shipping">
        <span className={props.currentStep === 2 ? styles.progressIconActive : styles.progressIcon}>
          <span className={props.currentStep !== 2 ? styles.textDisplayNone : styles.text}>2</span>
          <svg className={`${styles.icon} ${styles.cursorPoint}`}></svg>
        </span>
        <span
          className={props.currentStep === 2 ? styles.progressLabelActive : styles.progressLabel}>
          運送方式
        </span>
      </span>
      <span
        className={props.currentStep === 2 ? styles.progressBarActive : styles.progressBar}
        data-order="2"></span>
      <span className={styles.progressGroup} data-phase="credit-card">
        <span className={props.currentStep === 3 ? styles.progressIconActive : styles.progressIcon}>
          <span className={props.currentStep !== 3 ? styles.textDisplayNone : styles.text}>3</span>
          <svg className={`${styles.icon} ${styles.cursorPoint}`}></svg>
        </span>
        <span
          className={props.currentStep === 3 ? styles.progressLabelActive : styles.progressLabel}>
          付款資訊
        </span>
      </span>
    </section>
  )
}

export default StepProgress
