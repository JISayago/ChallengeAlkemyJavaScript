import React from 'react'

function Detail() {
  return (
    <div className='detail'>
    <div className='detail_row'>
    <label className='category'><strong>Category:</strong></label><label className='detail_data'> Food</label>
    </div>
    <div className='detail_row'>
    <label className='amount'><strong>Total:</strong></label><label className='detail_data'> $98.85{/*if extraction red and -*/ }</label>
    </div>
    <div className='detail_row'>
    <label className='concept'><strong>Concept:</strong></label><label className='detail_data'><small>asasd</small></label>
    </div>
      
 </div>
  )
}

export default Detail;
