import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'


const Layout = () => {
  return (
   <>
     <Navbar />
     <main style={{height:"500px" }}>
        <Outlet />
     </main>
     <Footer />
   </>
  )
}

export default Layout
