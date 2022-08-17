import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/operations/")
      .then((response) => {
        console.log(response.data);
      })
  },[])
  
  return (
       
    <div className="App">
    </div>
  );
}

export default App;
