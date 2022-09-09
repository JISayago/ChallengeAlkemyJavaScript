import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import  UserLoggedContext from "./context/UserLoggedContext";

function App() {
  const { userLogged } = useContext(UserLoggedContext)
  const flag = true;
  

  return (
           
    <div className="App">
      {userLogged.userName !== "guest" && userLogged.password !== "123" ?
        <Home logged={flag} user={userLogged.userName } /> :
        <Home logged={!flag} user={userLogged.userName }/>
        }
        
        
    </div>
  );
}

export default App;
