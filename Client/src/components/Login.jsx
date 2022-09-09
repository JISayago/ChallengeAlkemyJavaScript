import React from 'react'
import AccountFormButtons from './AccountFormButtons';

function Login() {
  const formClass = "login_form";
    return (
        <form className='login_form user_form'>
        <div className='row'>
          <label>Email</label>
        <input type="email" />
        </div>
        <div className='row'>
          <label>Password</label>
          <input type="password" />
        </div>
        <AccountFormButtons formClass={formClass} />
    </form>      
  )
}
export default Login;