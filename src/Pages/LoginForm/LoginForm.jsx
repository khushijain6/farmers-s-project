import React from 'react'
import './LoginForm.css'
function LoginForm() {
  return (
    <div className="form-box">
		<div className="header-text">
			Login Form
		</div>
            <input placeholder="Your Email Address" type="text" /> 
            <input placeholder="Your Password" type="password" /> 
            <button>login</button>
            <span>Or Click here to <a href="#">Register</a></span> 
	</div>
  )
}

export default LoginForm