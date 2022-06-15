import React from 'react';

function Btn({ btnClassName, children, btnType, btnId, handleClick }) {
  return (
    <button
      type={btnType}
      className={btnClassName}
      id={btnId}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Btn;
