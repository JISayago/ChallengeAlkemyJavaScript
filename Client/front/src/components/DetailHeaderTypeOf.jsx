import React from 'react'

function DetailHeaderTypeOf({type}) {
   
    
        
    return (
  <>
        {
                type === 0 ?
                <label className='typeOf color_red'>Outcome (-)</label> :
                    <label className='typeOf color_green'>Income (+)</label>
            }
                </>
    )
}
export default DetailHeaderTypeOf;