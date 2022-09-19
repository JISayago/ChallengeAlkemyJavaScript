import axios from 'axios';
import React, { useContext } from 'react';
import App from '../App';
import  UserLoggedContext from "../context/UserLoggedContext";

function AccountFormButtons({formClass}) {
  const { userLogged, setUserLogged } = useContext(UserLoggedContext);
  
  const handleEnter = (formClass, e) => {
    e.preventDefault();
    let email = document.getElementsByName("email")[0].value;
    let password = document.getElementsByName("password")[0].value;

    axios.post(`http://localhost:3001/api/accountHandler/login`,
      {
        email: email,
        password: password
    }
    ).then(response => setUserLogged({
      id:`${response.data.id}`,
      email: `${response.data.email}`,
      userName:`${response.data.userName}`
    })  
    )
      .then(<App userId={userLogged.id } />)
    .catch(function (error) {
    console.log(error);
    })
  }
  
  const handleCancelForm = (formClass, e) => {
    e.preventDefault();
    let element = document.getElementsByClassName(formClass)[0];
       element.classList.remove("user_form_visible");
  }


  return (
    <div className='row'>
    <button onClick={(e) => handleEnter(formClass,e)} >Enter</button>
    <button  onClick={(e)=>handleCancelForm(formClass)}>Cancel</button>
    </div>
  )
}
export default AccountFormButtons;