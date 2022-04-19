import React from 'react'

function SecondaryButton({name,type,size, onClick, disabled,style}) {


  return (
    <button
      type={type}
      name={name}
      size={size}
      onClick={onClick}
      disabled={disabled}
      
    className={`text-white font-bold text-xl bg-yellow-500 px-3 py-3 border rounded-md hover:bg-blue-500 transition-all duration-300 ${style && style}`}>
      {name && name}
    </button>
  )
}

export default SecondaryButton