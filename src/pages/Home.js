import React from 'react'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import { Outlet } from 'react-router-dom'
import { CryptoProvider } from '../context/CryptoContext'

export default function Home() {
    
  return (
    <CryptoProvider >
      <main className='w-full h-full flex flex-col items-center relative text-white font-nunito bg-gray-300'>
        <div className='w-full'>
          <Logo />
          <Navigation />
        </div>
        <Outlet />
      </main>
    </CryptoProvider>
  )
}
