import React from 'react'
import './backtoLogin.css'
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'



const BackToLogin = () => {
    const navigate = useNavigate()
    const navigateHandle = () =>{
       navigate('/login')
    }
  return (
    <div onClick={navigateHandle} className='back-login-ui'>
     <IoArrowBack />
     <span>Back to login</span>
    </div>
  )
}

export default BackToLogin
