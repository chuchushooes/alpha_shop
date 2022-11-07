import { ReactComponent as PgComplete } from '../icons/pg-complete.svg' //將 SVG 圖檔包裝為 Component

export function StepProgress () {
  return (
        <>
          <section className="progress-container col col-12">
            <span className="progress-group" data-phase="address">
              <span className="progress-icon">
                <span className="text">1</span>
                <svg className="icon cursor-point">
                  <PgComplete/>
                  {/* <use xlink:href="#svg-icon-pg-complete"></use> */}
                </svg>
              </span>
              <span className="progress-label">寄送地址</span>
            </span>
            <span className="progress-bar" data-order="1"></span>
            <span className="progress-group" data-phase="shipping">
              <span className="progress-icon">
                <span className="text">2</span>
                <svg className="icon cursor-point">
                  <PgComplete/>
                  {/* <use xlink:href="#svg-icon-pg-complete"></use> */}
                </svg>
              </span>
              <span className="progress-label">運送方式</span>
            </span>
            <span className="progress-bar" data-order="2"></span>
            <span className="progress-group" data-phase="credit-card">
              <span className="progress-icon">
                <span className="text">3</span>
                <svg className="icon cursor-point">
                  <PgComplete/>
                  {/* <use xlink:href="#svg-icon-pg-complete"></use> */}
                </svg>
              </span>
              <span className="progress-label">付款資訊</span>
            </span>
          </section>
          </>
  )
}