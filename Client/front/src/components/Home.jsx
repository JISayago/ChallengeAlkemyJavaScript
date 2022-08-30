import React from 'react';
import "./css/home.css";
import "./css/form.css";
import "./css/userForm.css";
import ActionButtons from './ActionButtons';
import AccountButtons from './AccountButtons';
import OperationList from './OperationList';
import UserName from './UserName';
import OperationForm from './OperationForm';
import Register from './Register';
import Login from './Login';

function Home() {
  return (
      <div>
          <div className='header'>
              <AccountButtons/>
              <UserName/>
          </div>
          <div className='body'>
              <ActionButtons />
              <Register/>
              <OperationForm/>
              <OperationList />
              
          </div>
          
      </div>
  )
}

export default Home;