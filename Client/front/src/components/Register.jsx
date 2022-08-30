import React from 'react'

function Register() {
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
    <button>Register</button>
</form>    

    )
}
export default Register;