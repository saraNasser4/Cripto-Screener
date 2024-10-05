import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoSvg from '../assets/logo.svg'

function Logo() {
  return (
    <NavLink 
      path=""
      className="absolute top-[1.5rem] lefy-[1.5rem] text-lg text-cyan font-bold flex items-center" >
        <img src={LogoSvg} alt="CryptoBucks"/>
        <span>CryptoBucks</span>
    </NavLink>
  )
}

export default Logo