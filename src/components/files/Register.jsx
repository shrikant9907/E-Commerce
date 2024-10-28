import React, { useState } from 'react'
import './files.css'
import Create from '../ui/Create'
import { FaFolderPlus } from "react-icons/fa";
import Button from '../ui/Button';
import BackToLogin from '../ui/BackToLogin';
import { useNavigate } from 'react-router-dom';


const Register = () => {

const[name,setName] = useState('')
const[email,setEmail] = useState('')
const[password,setPassword] = useState('')
const navigate = useNavigate();

const nameChange = (e)=>{
  setName(e.target.value)
};
const emailChange = (e)=>{
  setEmail(e.target.value)
};
const passwordChange = (e) => {
  setPassword(e.target.value)
};
const submitHandle = (e) => {
    e.preventDefault();
    console.log(name,email,password);
    navigate('/login');
};

  return (
    <div className='files-main'>
     
     <form onSubmit={submitHandle}>
        <div className="files-container">
            <div className="files-header">
              <FaFolderPlus />
              <p className="files-heading">Welcome</p>
              <p className='files-title'>Create a new account</p>
            </div>
               <div className="files-item">
               <label>Name *</label>
               <Create onChange={nameChange} type='text' required placeholder='Enter your name' />
               </div>

               <div className="files-item">
               <label>Email *</label>
               <Create onChange={emailChange} type='email' required placeholder='Enter your email' />
               </div>

               <div className="files-item">
               <label>Password *</label>
               <Create onChange={passwordChange} type='password' required placeholder='Enter your password' />
               </div>


               <div className="files-action">
                <Button>Register</Button>
               </div>
               <div>
                <BackToLogin />
               </div>
            </div>
     </form>
    </div>
  )
}

export default Register
