import React from 'react'
import { Header } from '../components/layouts/Header/Header'
import Footer from '../components/layouts/Footer'

export default function HomeLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='relative'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}
