import React from 'react'

function MainButton({name,type,size, onClick, disabled,style}) {


  return (
    <button
      type={type}
      name={name}
      size={size}
      onClick={onClick}
      disabled={disabled}
      style={style}
    className='text-white font-bold text-xl bg-orange-500 px-8 py-3 border rounded-md hover:bg-green-500 transition-all duration-300'>
      {name && name}
    </button>
  )
}

export default MainButton