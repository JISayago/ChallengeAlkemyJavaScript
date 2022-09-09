import React from 'react'
import Detail from './Detail';
import DetailHeader from './DetailHeader';
import DetailButtons from './DetailButtons';

function OperationDetail({ operation }) {
  const date = new Date(operation.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let fullYear = date.getFullYear();
  
  let date_toString = `${day}/${month}/${fullYear}`;
  
  return (
    <div  className='operation'>
    <div className='operation_detail'>
        <DetailHeader
          date={date_toString}
          typeOf={operation.typeOf}
          />
        <Detail
          category={operation.category}
          amount={operation.amount} 
          concept={operation.concept}
          />
        <DetailButtons operation={operation} />
      </div>
</div>
  )
}
export default OperationDetail;