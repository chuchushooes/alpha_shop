/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { CreditCardContext } from './CreditCardForm'

function CreditCardFormInput(props) {
  const creditCardContext = useContext(CreditCardContext)
  const { form, handleFormChange } = creditCardContext
  const { type = 'text', name, placeholder = 'John Doe' } = props

  return (
    <div className="FormInput">
      <input
        type={type}
        name={name}
        value={form[name]}
        placeholder={placeholder}
        onChange={handleFormChange}
      />
    </div>
  )
}

export default CreditCardFormInput
