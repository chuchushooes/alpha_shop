/* eslint-disable react/prop-types */

// 變數記得+{}
function CreditCardFormInput({ type, name, placeholder, onChange }) {
  return (
    <div className="FormInput">
      <input type={type} name={name} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default CreditCardFormInput
