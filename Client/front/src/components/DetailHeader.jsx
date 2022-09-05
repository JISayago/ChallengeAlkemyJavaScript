import React from 'react'
import DetailHeaderTypeOf from './DetailHeaderTypeOf';
function DetailHeader(props) {



  return (
    <div className='detail_header'>
      <label className='date'>{props.date}</label>
      <DetailHeaderTypeOf type={props.typeOf } />
    </div>
  )
}
export default DetailHeader;
