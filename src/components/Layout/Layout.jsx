import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Product from '../Product-Data/Product'


const Layout = () => {
  return (
   <>
     <Navbar />
     {/* <Product /> */}
     <main style={{height:"800px" }}>
        <Outlet />
     </main>
     <Footer />
   </>
  )
}

export default Layout

