import React, { useEffect, useRef, useState } from 'react'
import './verifyotp.css'
import Create from '../ui/Create'
import Button from '../ui/Button'
import BackToLogin from '../ui/BackToLogin'
import { FaFingerprint } from 'react-icons/fa'
import Timer from './Timer'
import { useNavigate } from 'react-router-dom'

const VerifyOtp = () => {
    const navigate = useNavigate();

    // Create a single array ref
    const inputRef = useRef(Array(6).fill(null));

    // State to store each OTP digit
    const [otp, setOtp] = useState(Array(6).fill(''));

    useEffect(() => {
        // Focus on the first input field on load
        if (inputRef.current[0]) {
            inputRef.current[0].focus();
        }
    }, []);

    const inputChange = (e, index) => {
        const value = e.target.value.slice(0, 1); // Only allow a single digit
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move focus to the next input if available
        if (value && index < inputRef.current.length - 1) {
            inputRef.current[index + 1].focus();
        }
    };

    const submitHandle = (e) => {
        e.preventDefault();
        const finalOtp = otp.join('');
        console.log(finalOtp);
        navigate('/password-update');
    };

    return (
        <div className='files-main'>
            <form onSubmit={submitHandle}>
                <div className="files-container">
                    <div className="files-header">
                        <FaFingerprint />
                        <p className="files-heading">Verify your OTP</p>
                        <p className="files-title">Enter the 6-digit OTP we just sent to your email</p>
                    </div>
                    <div className="files-item">
                        <label>OTP *</label>
                        <div className='otp-container'>
                            {otp.map((_, index) => (
                                <input
                                    key={index}
                                    type='number'
                                    required
                                    className='ui-create otp-input'
                                    value={otp[index]}
                                    onChange={(e) => inputChange(e, index)}
                                    ref={(el) => (inputRef.current[index] = el)}
                                />
                            ))}
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
    );
}

export default VerifyOtp;
