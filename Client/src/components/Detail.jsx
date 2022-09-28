import React from 'react'

function Detail(props) {
  return (
    <div className='detail'>
    <div className='detail_row'>
        <label className='category'><strong>Category:</strong></label><label className='detail_data'>{props.category.categoryName}</label>
    </div>
    <div className='detail_row'>
        <label className='amount'><strong>Amount:</strong></label><label className='detail_data'> ${props.amount}</label>
    </div>
    <div className='detail_row'>
        <label className='concept'><strong>Concept:</strong></label><label className='detail_data'><small>{props.concept}</small></label>
    </div>
      
 </div>
  )
}

export default Detail;
