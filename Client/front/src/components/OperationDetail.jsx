import React from 'react'
import Detail from './Detail';
import DetailHeader from './DetailHeader';
import DetailButtons from './DetailButtons';

function OperationDetail({ operation }) {
  
  return (
    <div  className='operation'>
    <div className='operation_detail'>
        <DetailHeader
          date={operation.date}
          typeOf={ operation.typeOf} />
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