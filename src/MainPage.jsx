import {StepProgress} from './components/main/StepProgress.jsx'
import {Step1Address} from './components/main/Step1Address.jsx'
import {Step2Shipping} from './components/main/Step2Shipping.jsx'
import {Step3Creditcard} from './components/main/Step3Creditcard.jsx'
import {ProgressControl} from './components/main/ProgressControl.jsx'

/*本份作業還沒撰寫換頁邏輯*/

export default function MainPage () {
  return (
    <main className="site-main">
      <div className="main-container">
        <h2 className="register-title col col-12">結帳</h2>
        <section className="stepProgress">
          <StepProgress />
        </section>
      </div>
      <section className="form-container">
          <Step1Address/>
          <Step2Shipping/>
          <Step3Creditcard/>
      </section>
      <section class="progress-control-container col col-lg-6 col-sm-12">
          <ProgressControl/>
      </section>
    </main>
  )
}