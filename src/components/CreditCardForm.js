/* eslint-disable react/prop-types */
import { useState } from 'react'
import { createContext } from 'react'

export const CreditCardContext = createContext({
  form: {},
  handleFormChange: () => {}
})

function CreditCardForm(props) {
  const { children, formInitialValues } = props
  //建立表單初始狀態
  const [form, setForm] = useState(formInitialValues)

  //表單更改時輸入內容即更新
  const handleFormChange = (e) => {
    const updatedForm = {
      ...form,
      [e.target.name]: e.target.value
    }
    console.log('Form changed: ', updatedForm)
    setForm(updatedForm)
  }
  return (
    <form className="CreditCardForm">
      <CreditCardContext.Provider value={{ form, handleFormChange }}>
        {children}
      </CreditCardContext.Provider>
    </form>
  )
}

export default CreditCardForm
