import React from 'react'

const InputDefault = ({ type, value, name, onChange, placeholder, required}) => {
  return (
    <input 
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={!!required}
        className='
            w-full
            h-12
            rounded
            border-2 border-gray-300
            pl-2
        ' 
    />
  )
}

export default InputDefault