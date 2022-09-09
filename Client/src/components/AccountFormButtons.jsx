import React from 'react'

function AccountFormButtons({formClass}) {
  
  const handleCancelForm = (formClass, e) => {
        e.preventDefault();
    let element = document.getElementsByClassName(formClass)[0];
       element.classList.remove("user_form_visible");
    }
    
    
  return (
    <div className='row'>
    <button>Enter</button>
    <button onClick={e => handleCancelForm(formClass,e)}>Cancel</button>
    </div>
  )
}
export default AccountFormButtons;