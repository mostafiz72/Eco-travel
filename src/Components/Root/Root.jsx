import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Root() {
  document.title= "Eco-adventure";
  return (
    <>
      <Navbar />

        <Outlet />
        
      <Footer />
    </>
  )
}
