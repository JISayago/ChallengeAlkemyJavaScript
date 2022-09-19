import React,{useContext, useEffect,useState} from 'react'
import  UserLoggedContext from "../context/UserLoggedContext";
import OperationDetail from './OperationDetail';
import axios from 'axios';

function OperationList() {

  const [operations, setOperations] = useState([]);
  const { userLogged } = useContext(UserLoggedContext);
  
  useEffect(() => {
    axios.get(`http://localhost:3001/api/operations/${userLogged.id}`)
      .then(res => setOperations(res.data))
      .catch(error => console.log(error))
  }, [userLogged])

    
  
  return (
    <div className='list_operations'>
      <h2>Last Operations</h2>
      {operations.map(operation =>
        <OperationDetail
          key={operation.id}
          operation={operation} />
       )
        
      }
    </div>
  )
}
export default OperationList;