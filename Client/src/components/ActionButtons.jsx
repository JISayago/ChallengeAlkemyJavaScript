import React from 'react'

function ActionButtons() {
  const handleAddOperation = (e) => {
    e.preventDefault();
    let element = document.getElementsByClassName('operation_form')[0];
    element.classList.add("operation_form_visible");
  }
  
  return (
    <div className='action_buttons'>
    <button onClick={handleAddOperation} className='button_add'>Add new operation</button>
    <button className='button_show'>Show history</button>
</div>
  )
}
export default ActionButtons;