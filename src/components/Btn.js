import React from 'react'

const Btn = ({ btnClassName, children, btnType, btnId, handleClick }) => (
  <button
    type={btnType}
    className={btnClassName}
    id={btnId}
    onClick={handleClick}
  >
    {children}
  </button>
)

export default Btn
