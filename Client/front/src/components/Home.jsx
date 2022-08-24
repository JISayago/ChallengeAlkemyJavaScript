import React from 'react';
import "./css/header.css";
import ActionButtons from './ActionButtons';
import AccountButtons from './AccountButtons';
import OperationList from './OperationList';

function Home() {
  return (
      <div>
          <div className='header'>
               <AccountButtons/>
              <div className='accountName'>
                  <label>User: TheMostBetter</label>
              </div>
          </div>
          <div className='body'>
              <ActionButtons />
              <OperationList/>              
          </div>
          
      </div>
  )
}

export default Home;