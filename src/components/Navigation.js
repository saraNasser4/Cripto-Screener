import React from 'react'
import {NavLink} from 'react-router-dom'

function Navigation() {
    const btnsData = [
        { to: "/", text: "Crypto"},
        { to: "/trending", text: "Trending"},
        { to: "/saved", text: "Saved" },
    ]
  return (
    <nav className='mx-5 sm:mx-auto max-w-[550px] lg:w-[40%] mt-[75px] flex justify-around align-middle border border-cyan rounded-lg'>
        {btnsData.map((data)=> {
            return (
                <NavLink 
                    className={({isActive})=> (`w-full text-base m-2.5 font-semibold text-center capitalize cursor-pointer rounded ${isActive ? "bg-cyan text-gray-300" : "bg-gray-200 text-gray-100 hover:text-cyan"}`)}
                    to={data.to}>
                        <span>{data.text}</span>
                </NavLink>
            )

        })}
        
    </nav>
  )
}

export default Navigation