import React from 'react'
import AccountFormButtons from './AccountFormButtons';

function Register() {
  const formClass = "register_form";
  return (
    <form className='register_form user_form'>
    <div className='row'>
      <label>Email</label>
    <input type="email" />
    </div>
    <div className='row'>
      <label>Password</label>
      <input type="password" />
          </div>
          <div className='row'>
              <label>User</label>
              <input type="text"/>
          </div>
      <AccountFormButtons formClass={formClass} />
</form>    

    )
}
export default Register;