import React from 'react'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import { Outlet } from 'react-router-dom'

export default function Home() {
    
  return (
    <main className='w-full h-full flex flex-col items-center relative text-white font-nunito'>
      <div className='bg-gray-300 w-screen h-screen fixed -z-10'>
        <Logo />
        <Navigation />
      </div>
      <Outlet />
    </main>
  )
}
