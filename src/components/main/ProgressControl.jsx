import { ReactComponent as RightArrow } from '../icons/right-arrow.svg' //將 SVG 圖檔包裝為 Component
// import { ReactComponent as LeftArrow } from '../icons/left-arrow.svg'


export function ProgressControl () {
  return (
        <>
          <section className="button-group col col-12" data-phase="address">
            <button className="next">
              下一步
              <RightArrow className="cursor-point"/>
              {/* <svg className="cursor-point">
                <use xlink:href="#svg-icon-right-arrow"></use>
              </svg> */}
            </button>
          </section>
          {/* <section className="button-group col col-12" data-phase="shipping">
            <button className="prev">
              <svg className="cursor-point">
                <use xlink:href="#svg-icon-left-arrow"></use>
              </svg>
              上一步
            </button>
            <button className="next">
              下一步
              <svg className="cursor-point">
                <use xlink:href="#svg-icon-right-arrow"></use>
              </svg>
            </button>
          </section>
          <section className="button-group col col-12" data-phase="credit-card">
            <button className="prev">
              <svg className="cursor-point">
                <use xlink:href="#svg-icon-left-arrow"></use>
              </svg>
              上一步
            </button>
            <button className="next">
              確認下單
            </button>
          </section> */}
          </>
  )
}