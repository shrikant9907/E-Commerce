import React, { useState } from 'react';
import Create from '../ui/Create';
import Button from '../ui/Button';
import BackToLogin from '../ui/BackToLogin';
import { RxUpdate } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // Fixed typo here
    const navigate = useNavigate();

    const passwordChange = (e) => {
        setPassword(e.target.value);
    };

    const confirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value); // Fixed typo here
    };

    const submitHandle = (e) => {
        e.preventDefault();
        console.log(password, confirmPassword);
        navigate('/login');
    };

    return (
        <div className='files-main'>
            <form onSubmit={submitHandle}>
                <div className="files-contain">
                    <div className="files-header">
                        <RxUpdate />
                        <p className="files-heading">New Password</p>
                        <p className="files-title">Enter at least 6-digit long password</p>
                    </div>
                    <div className="files-item">
                        <label>Password *</label>
                        <Create onChange={passwordChange} type='text' required placeholder='New password' />
                    </div>

                    <div className="files-item">
                        <label>Confirm Password *</label>
                        <Create onChange={confirmPasswordChange} type='text' required placeholder='Confirm password' />
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
    );
};

export default UpdatePassword;
