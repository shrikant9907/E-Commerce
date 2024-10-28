import React, { useState } from 'react'
import Create from '../ui/Create'
import Button from '../ui/Button'
import BackToLogin from '../ui/BackToLogin'
import { RxUpdate } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'

const UpdatePassword = () => {

    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPasswprd]= useState('')
    const navigate = useNavigate();

    const passwordChange = (e)=>{
        setPassword(e.target.value)
    }
    const confirmPasswordChange = (e)=>{
        setConfirmPasswprd(e.target.value);
    }

    const submitHandle = (e)=>{
        e.preventDefault();
        console.log(password,confirmPassword);
        navigate('/login');
    }
  return (
    <div className='files-main'>
    <form onSubmit={submitHandle}>
        <div className="files-contain">
            <div className="files-header">
                <RxUpdate />
                <p className="files-heading">New Password</p>
                <p className="files-title">enter at least 6-digit long password</p>
            </div>
            <div className="files-item">
                <label>Password *</label>
                <Create onChange={passwordChange} type='text' required placeholder='new passwprd' />
            </div>

            <div className="files-item">
                <label>confirm password *</label>
                <Create onChange={confirmPassword} type='text' required placeholder='confirm passwprd' />
            </div>
            <div className="files-action">
                <Button>Update Password</Button>
            </div>
            <div>
                <BackToLogin />
            </div>
        </div>
    </form>
      
    </div>
  )
}

export default UpdatePassword
