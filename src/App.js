import React from 'react'
import Register from './components/files/Register'
import { Routes, Route } from 'react-router-dom'
import Login from './components/files/Login'
import ForgotPassword from './components/files/ForgotPassword'
import VerifyOtp from './components/files/VerifyOtp'
import UpdatePassword from './components/files/UpdatePassword'

const App = () => {
  return (
   <Routes>
   <Route path='/register' element={<Register />} />
   <Route path='/login' element={<Login/>} />
   <Route path='/forgot/password' element={<ForgotPassword/>} />
   <Route path='/otp/verify' element={<VerifyOtp />} />
   <Route path='/passwprd/update' element={<UpdatePassword />} />
   </Routes>
  )
}

export default App
