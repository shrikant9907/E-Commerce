import React from 'react'
import './button.css'

const Button = ({onClick,type,children}) => {
  return (
    <button className='ui-button' onClick={onClick} type={type}>{children}</button>
  )
}

export default Button
