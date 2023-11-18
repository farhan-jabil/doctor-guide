import React from 'react'
import Footer from '../../landingPage/Footer'
import Navbar from '../../navbar/Navbar'

export default function Container({ children }) {
  return (
    <div className=''>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
