import React from 'react'

function ActionButtons() {
  const displayNone = () => {
    let list = document.getElementsByClassName('list_operations')[0];
    list.classList.add("display_none");
    list.classList.remove("list_operations");
    }
  
  return (
    <div className='action_buttons'>
    <button onClick={displayNone} className='button_add'>Add new operations</button>
    <button className='button_show'>Show history</button>
</div>
  )
}
export default ActionButtons;