import { createContext } from 'react'

// 建立初始資料
export const CreditCardContext = createContext({
  holderName: '',
  cardNumber: '',
  expireDate: '',
  cvc: ''
})

export default CreditCardContext
