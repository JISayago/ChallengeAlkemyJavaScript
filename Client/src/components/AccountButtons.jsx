import React, { useContext } from 'react';
import UserLoggedContext from '../context/UserLoggedContext';


function AccountButtons() {
  const { userLogged, setUserLogged } = useContext(UserLoggedContext);
   
      


  const handleAccountOption = (classname) => {
    let element = document.getElementsByClassName(classname)[0];
    if (classname === "login_form") {
      let reg = document.getElementsByClassName("register_form")[0];
      reg.classList.remove("user_form_visible")
    } else {
      let log = document.getElementsByClassName("login_form")[0];
      log.classList.remove("user_form_visible")
    } 
    element.classList.add("user_form_visible");
  }

  const showLogin = (e) => {
    e.preventDefault();
    handleAccountOption("login_form");
  }
  const showRegister = (e) => {
    e.preventDefault();
    handleAccountOption("register_form");
  }
  const handleLogout = (e) => {
    e.preventDefault();
    setUserLogged({
      id: 0,
      email: "guest@gmail.com",
      userName: "guest"
    })

  }

  return (
    <div className='account_buttons'>
      {userLogged.id !== 0 ?
        <button onClick={handleLogout} className='button_signIn'>Sign-Out</button>
        :
        <button onClick={showLogin} className='button_signIn'>Sign-In</button>
      }
    
    <button onClick={showRegister} className='button_signUp'>Sign-Up</button>
      
    </div>
  )
}
export default AccountButtons;