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
import { OperationListContextProvider } from "../context/OperationListContext";

function Home(props) {
    const logged = props.logged;
    const user = props.user;
  return (
      <div>
          <div className='header'>
              <AccountButtons/>
              <UserName user={ user} />
          </div>
          <div className='body'>
              {logged ?
                  <>
                  <ActionButtons />
                  <Register />
                      <Login />
                      <OperationListContextProvider>
                          <OperationForm/>
                          <OperationList/>
                      </OperationListContextProvider>
                  </> :
                  <>
                  <Register />
                      <Login />
                      <div className='title_alert_container'>
                          <h2 className='title_alert'>
                              Please Login or Sign Up!
                          </h2>
                      </div>
                  </>
                  
               }
              
          </div>
          
      </div>
  )
}

export default Home;