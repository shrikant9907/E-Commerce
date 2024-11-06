import React, { useState } from 'react'
import './forgotpassword.css'
import Create from '../ui/Create'
import Button from '../ui/Button'
import BackToLogin from '../ui/BackToLogin'
import { MdOutlineAttachEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
const ForgotPassword = () => {

    const [email,setEmail] = useState('')
    const navigate = useNavigate()
    const emailChange = (e)=>{
        setEmail(e.target.value)
    }
    const submitHandle = (e)=>{
        e.preventDefault()
        navigate('/otp-verify');

    }
  return (
    <div className='files-main'>
      <form onSubmit={submitHandle}>
        <div className="files-container">
            <div className="files-header">
                <MdOutlineAttachEmail />
                <p className="files-heading">Forgot your passwprd</p>
                <p className="files-title">Enter your registered email we will send a 6-digit OTP</p>
            </div>
            <div className="files-item">
                <label>Email</label>
                <Create onChange={emailChange} type='email' required placeholder='Enter your email' />
            </div>
            <div className="files-action">
                <Button>Send OTP</Button>
            </div>
            <div>
                <BackToLogin />
            </div>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword
