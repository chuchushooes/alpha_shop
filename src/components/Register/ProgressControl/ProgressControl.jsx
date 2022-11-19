import { ReactComponent as RightArrow } from '../../assets/icons/right-arrow.svg' //將 SVG 圖檔包裝為 Component
// import { ReactComponent as LeftArrow } from '../../assets/icons/left-arrow.svg'
import styles from './ProgressControl.module.css'

function ProgressControl() {
  return (
    <section className={styles.progressControlContainer}>
      <section className={`${styles.buttonGroup} ${styles.col12}`} data-phase="address">
        <button className={styles.next}>
          下一步
          <RightArrow className={`${styles.cursorPoint} ${styles.rightArrow}`} />
        </button>
      </section>
      {/* <section className={styles.buttonGroupTwo} data-phase="shipping">
            <button className={styles.prev}>
               <LeftArrow className={`${styles.cursorPoint} ${styles.leftArrow}`}/>
              上一步
            </button>
            <button className={styles.next}>
              下一步
              <RightArrow className={`${styles.cursorPoint} ${styles.rightArrow}`}/>
            </button>
          </section> */}
      {/* <section className={styles.buttonGroupTwo} data-phase="credit-card">
            <button className={styles.prev}>
              <LeftArrow className={`${styles.cursorPoint} ${styles.leftArrow}`}/>
              上一步
            </button>
            <button className={styles.next}>
              確認下單
            </button>
          </section> */}
    </section>
  )
}

export default ProgressControl
