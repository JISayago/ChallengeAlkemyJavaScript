import { useContext, useEffect } from "react";
import axios from "axios";
import Home from "./components/Home";
import  UserLoggedContext from "./context/UserLoggedContext";

function App() {
  const flag = true;
  const { userLogged } = useContext(UserLoggedContext);

  return (
           
    <div className="App">
      {userLogged.id !== 0 && userLogged.userName !== "guest" && userLogged.email !== "guest@gmail.com" ?
        <Home logged={flag} user={userLogged.userName } /> :
        <Home logged={!flag} user={userLogged.userName }/>
        }
        
        
    </div>
  );
}

export default App;
