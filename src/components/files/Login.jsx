import React, { useState } from "react";
import Create from "../ui/Create";
import Button from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";
import { PiBank } from "react-icons/pi";
import { Navigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Neelam = useNavigate();
  

  const emailChnage = (event) => {
    setEmail(event.target.value);
  };

  const passwordChnage = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    Neelam('/product');
    
    console.log(email, password);
  };

  return (
    <div className="files-main">
      <form onSubmit={submitHandler}>
        <div className="files-container">
          <div className="files-header">
            <IoIosLogIn />
            <p className="files-heading">welcome back</p>
            <p className="files-title">login to continue</p>
          </div>
          <div className="files-item">
            <label>Email * </label>
            <Create
              onChange={emailChnage}
              type="email"
              required
              placeholder="enter your email"
            />
          </div>
          <div className="files-item">
            <label>Password *</label>
            <Create
              onChange={passwordChnage}
              type="password"
              required
              placeholder="enter your password"
            />
          </div>
          <div className="files-action">
            <Button>
              {/* <LoadingButton loading={loading} title="Login" /> */}
              Login
            </Button>
          </div>
          <div className="files-options">
            <Link to="/register">Create new account?</Link>
            <Link to="/forget-password">Forget password</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
