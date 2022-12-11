import { createContext } from 'react'

export const creditCardDefault = {
  holderName: '',
  cardNumber: '',
  expireDate: '',
  CVC: ''
}

export const CreditCardContext = createContext(creditCardDefault)
