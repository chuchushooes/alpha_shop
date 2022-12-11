import { ReactComponent as RightArrow } from '../../../assets/icons/right-arrow.svg' //將 SVG 圖檔包裝為 Component
import { ReactComponent as LeftArrow } from '../../../assets/icons/left-arrow.svg'
import styles from './ProgressControl.module.css'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { CreditCardContext } from '../../CreditCardFormContext'
import { CartContext } from '../../CartContext'

ProgressControl.propTypes = {
  currentStep: PropTypes.number,
  onClick: PropTypes.func
}

//由父層 Register 接收 currentStep 和 onClick 變數，去做選擇判斷操控 css
//這裡的 jsx 是下條件式，當為 true 時就顯示，使用二種方法，一種是三元運算子，另一種是短路 && (true時才顯示)
//onClick={handleNextClick}，當元件被點擊時才會執行，並不會自動執行(監聽事件)
function ProgressControl(props) {
  const productItem = useContext(CartContext)
  const { creditCardInfo } = useContext(CreditCardContext)

  // context使用信用卡資料
  // 確認下單印出信用卡資訊及購物車小計金額
  function handleFormSubmit() {
    console.log({ creditCardInfo })
    console.log(`Total Price is: $${Total(productItem)}`)
  }

  function Total(productItem) {
    console.log(typeof productItem) //物件
  }

  //點擊button進行換頁，props.onClick()，指 setStep 為 props.currentStep + 1，改變狀態
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
          <button className={`${styles.next} ${styles.cursorPoint}`} onClick={handleFormSubmit}>
            確認下單
          </button>
        </section>
      )}
    </section>
  )
}

export default ProgressControl
