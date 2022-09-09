import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home";

function App() {

  /*useEffect(() => {
    axios
      .get("http://localhost:3001/api/accountHandler/")
      .then((response) => {
        console.log(response.data);
      })
  },[])
  */
  return (
       
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
