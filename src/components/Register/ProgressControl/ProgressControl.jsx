import { ReactComponent as RightArrow } from '../../assets/icons/right-arrow.svg' //將 SVG 圖檔包裝為 Component
import { ReactComponent as LeftArrow } from '../../assets/icons/left-arrow.svg'
import styles from './ProgressControl.module.css'

function ProgressControl(props) {
  //點擊button進行換頁
  function handleNextClick() {
    if (props.currentStep < 3) {
      props.onClick(props.currentStep + 1)
    } else if (props.currentStep === 3) {
      alert(`已下單`)
    }
  }

  function handlePrevClick() {
    props.onClick(props.currentStep - 1)
  }

  return (
    <section className={styles.progressControlContainer}>
      {props.currentStep === 1 && (
        <section className={`${styles.buttonGroup} ${styles.col12}`} data-phase="address">
          <button className={`${styles.next} ${styles.cursorPoint}`} onClick={handleNextClick}>
            下一步
            <RightArrow className={`${styles.cursorPoint} ${styles.rightArrow}`} />
          </button>
        </section>
      )}
      {props.currentStep === 2 && (
        <section className={styles.buttonGroupTwo} data-phase="shipping">
          <button className={`${styles.prev} ${styles.cursorPoint} `} onClick={handlePrevClick}>
            <LeftArrow className={`${styles.cursorPoint} ${styles.leftArrow}`} />
            上一步
          </button>
          <button className={`${styles.next} ${styles.cursorPoint}`} onClick={handleNextClick}>
            下一步
            <RightArrow className={`${styles.cursorPoint} ${styles.rightArrow}`} />
          </button>
        </section>
      )}
      {props.currentStep === 3 && (
        <section className={styles.buttonGroupTwo} data-phase="credit-card">
          <button className={`${styles.prev} ${styles.cursorPoint} `} onClick={handlePrevClick}>
            <LeftArrow className={`${styles.cursorPoint} ${styles.leftArrow}`} />
            上一步
          </button>
          <button className={`${styles.next} ${styles.cursorPoint}`} onClick={handleNextClick}>
            確認下單
          </button>
        </section>
      )}
    </section>
  )
}

export default ProgressControl
