import React,{useContext, useEffect} from 'react'
import  UserLoggedContext from "../context/UserLoggedContext";
import OperationDetail from './OperationDetail';
import axios from 'axios';
import OperationListConext from "../context/OperationListContext";

function OperationList() {

  const { operationList, setOperationList } = useContext(OperationListConext);
  const { userLogged } = useContext(UserLoggedContext);
  
  useEffect(() => {
    axios.get(`http://localhost:3001/api/operations/${userLogged.id}`)
      .then(res => setOperationList(res.data))
      .catch(error => console.log(error))
  }, [])

    
  
  return (
    <div className='list_operations'>
      <h2>Last Operations</h2>
      {
        operationList.map(operation =>
        <OperationDetail
          key={operation.id}
          operation={operation} />
       )
        
      }
    </div>
  )
}
export default OperationList;