import React from 'react'
function DetailHeader(props) {
  return (
    <div className='detail_header'>
      <label className='date'>{props.date }</label>  
      <label className='typeOf'>{props.typeOf}</label>
    </div>
  )
}
export default DetailHeader;
