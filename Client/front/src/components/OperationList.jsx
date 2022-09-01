import React,{useEffect,useState} from 'react'
import OperationDetail from './OperationDetail';
const axios = require('axios');

function OperationList() {

  const [operations, setOperations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/operations')
      .then(res => setOperations(res.data))
      .catch(error => console.log(error))
  }, [])
  
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