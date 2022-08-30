import React from 'react'

function Login() {
    return (
        <form className='user_form'>
        <div className='row'>
          <label>Email</label>
        <input type="email" />
        </div>
        <div className='row'>
          <label>Password</label>
          <input type="password" />
          </div>
        <button>Enter</button>
    </form>      
  )
}
export default Login;