import React, { useEffect, useRef, useState } from 'react'
import './verifyotp.css'
import Create from '../ui/Create'
import Button from '../ui/Button'
import BackToLogin from '../ui/BackToLogin'
import { FaFingerprint } from 'react-icons/fa'
import Timer from './Timer'
import { useNavigate } from 'react-router-dom'

const VerifyOtp = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const navigate = useNavigate();

    const inputRef = [ref1,ref2,ref3,ref4,ref5,ref6];

    const [otp1,setOtp1] = useState('');
    const [otp2,setOtp2] = useState('');
    const [otp3,setOtp3] = useState('');
    const [otp4,setOtp4] = useState('');
    const [otp5,setOtp5] = useState('');
    const [otp6,setOtp6] = useState('');
    const otpArray = [setOtp1,setOtp2,setOtp3,setOtp4,setOtp5,setOtp6];

    useEffect(()=>{
        if(ref1.current){
            ref1.current.focus();
        }
    },[]);


    const inputChange = (e,location)=>{
        if(location < 5 && e.target.value){
            inputRef[location + 1].current.focus();
        }
        otpArray[location](e.target.value)
    };
    const submitHandle = (e)=>{
        e.preventDefault();
        const finalOtp = otp1+otp2+otp3+otp4+otp5+otp6;
        console.log(finalOtp);
        navigate('/password/update');
    };
  return (
    <div className='files-main'>
    <form onSubmit={submitHandle}>
        <div className="files-container">
            <div className="files-header">
                <FaFingerprint />
                <p className="files-heading">Verigy your OTP</p>
                <p className="files-title">Enter 6-digit OTP here we just send at your email</p>
            </div>
            <div className="files-item">
                <label>OTP *</label>
                <div className='otp-container'>
                    {[inputRef].map((item,index)=>{
                        return (
                            <input 
                            required
                            key={index}
                            onChange={(e)=>inputChange(e,index)}
                            ref={item}
                            onInput={(e)=>{
                            if(e.target.addEventListener.length > 1){
                                e.target.value = e.target.value.slice(0,1);
                            }
                            }} type='number' className='ui-create otp-input' />
                        );
                    })}
                </div>
            </div>
            <div className="files-action">
                <Button>Verify</Button>
            </div>
            <div>
                <Timer />
            </div>
            <div>
                <BackToLogin />
            </div>
        </div>
    </form>
      
    </div>
  )
}

export default VerifyOtp
