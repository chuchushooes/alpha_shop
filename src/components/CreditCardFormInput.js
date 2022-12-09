/* eslint-disable react/prop-types */
import { useState } from 'react'

function CreditCardFormInput(props) {
  const [value, setValue] = useState('')

  const { type = 'text', name, placeholder = 'John Doe' } = props

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="FormInput">
      <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default CreditCardFormInput
