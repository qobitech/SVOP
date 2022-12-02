import React from 'react'
import './button-loader.scss'

const ButtonLoader = ({ ...props }) => {
  return (
    <div className="loading">
      <span {...props}></span>
      <span {...props}></span>
      <span {...props}></span>
    </div>
  )
}

export default ButtonLoader
