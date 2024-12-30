import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Login() {
   const [values,setValues]=useState({
    email: '',
    password: ''
   })
   const navigate = useNavigate();

   const handleInput=(event)=>{
    setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
   }
   
   axios.defaults.withCredentials=true;

   const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:8081/login_auth',values)
        .then(result => {
            if(result.data.Login ){
                navigate('/Dashboard')
                
            }else{
                alert("No Record");
            }
            console.log(result);
            
        })
        .catch(err => console.log(err));

    }
    
  return (
    <div>
        <body className="account-page">

<div className="main-wrapper">
<div className="account-content">
<div className="d-flex flex-wrap w-100 vh-100 overflow-hidden account-bg-01">
<div className="d-flex align-items-center justify-content-center flex-wrap vh-100 overflow-auto p-4 w-50 bg-backdrop">
<form onSubmit={handleSubmit}  className="flex-fill">
<div className="mx-auto mw-450">
<div className="text-center mb-4">
<img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
</div>
<div className="mb-4">
<h4 className="mb-2 fs-20">Sign In</h4>
<p>Access the CRMS panel using your email and passcode.</p>
</div>
<div className="mb-3">
<label className="col-form-label">Email Address</label>
<div className="position-relative">
<span className="input-icon-addon">
<i className="ti ti-mail"></i>
</span>
<input type="email" placeholder='Enter Email' name='email' className="form-control" onChange={handleInput} />
</div>
</div>
<div className="mb-3">
<label className="col-form-label">Password</label>
<div className="pass-group">
<input type="password" placeholder='Enter Password' className="pass-input form-control" name='password' onChange={handleInput} />
<span className="ti toggle-password ti-eye-off"></span>
</div>
</div>
<div className="d-flex align-items-center justify-content-between mb-3">
<div className="form-check form-check-md d-flex align-items-center">
<input className="form-check-input" type="checkbox" value id="checkebox-md" checked />
<label className="form-check-label" for="checkebox-md">
Remember Me
</label>
</div>
<div className="text-end">
<a href="forgot-password.html" className="text-primary fw-medium link-hover">Forgot
Password?</a>
</div>
</div>
<div className="mb-3">
<button type="submit" className="btn btn-primary w-100">Sign In</button>
</div>
<div className="mb-3">
<h6>New on our platform?<a href="register.html" className="text-purple link-hover"> Create
an account</a></h6>
</div>
<div className="form-set-login or-text mb-3">
<h4>OR</h4>
</div>
<div className="d-flex align-items-center justify-content-center flex-wrap mb-3">
<div className="text-center me-2 flex-fill">
<a href="javascript:void(0);" className="br-10 p-2 px-4 btn bg-pending  d-flex align-items-center justify-content-center">
<img className="img-fluid m-1" src="assets/img/icons/facebook-logo.svg" alt="Facebook" />
</a>
</div>
<div className="text-center me-2 flex-fill">
<a href="javascript:void(0);" className="br-10 p-2 px-4 btn bg-white d-flex align-items-center justify-content-center">
<img className="img-fluid  m-1" src="assets/img/icons/google-logo.svg" alt="Facebook" />
</a>
</div>
<div className="text-center flex-fill">
<a href="javascript:void(0);" className="bg-dark br-10 p-2 px-4 btn btn-dark d-flex align-items-center justify-content-center">
<img className="img-fluid  m-1" src="assets/img/icons/apple-logo.svg" alt="Apple" />
</a>
</div>
</div>
<div className="text-center">
<p className="fw-medium text-gray">Copyright &copy; 2024 - CRMS</p>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</body>
    </div>
  )
}

export default Login