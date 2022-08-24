import React from 'react'
import Detail from './Detail';
import DetailHeader from './DetailHeader';
import DetailButtons from './DetailButtons';

function OperationDetail() {
  return (
    <div className='operation'>
    <div className='operation_detail'>
     <DetailHeader/>
        <Detail />
        <DetailButtons/>
    </div>
</div>
  )
}
export default OperationDetail;