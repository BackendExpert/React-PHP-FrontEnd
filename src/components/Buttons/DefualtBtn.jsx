import React from 'react'

const DefualtBtn = ({ btntype, btnvalue, onClick }) => {
  return (
    <button className='bg-blue-500 text-white py-3 rounded w-full' btntype={btntype} onClick={onClick}>{btnvalue}</button>
  )
}

export default DefualtBtn