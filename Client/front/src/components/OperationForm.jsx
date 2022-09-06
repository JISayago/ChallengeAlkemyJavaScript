import React from 'react'
import CategoryForm from './CategoryForm';

function OperationForm() {
  const handleEventCategoryForm = (e) => {
    e.preventDefault();
    let element = document.getElementsByClassName('category_form_')[0];
    element.classList.add("category_form_visible");

    let body_top = document.getElementsByClassName('operation_top_body')[0];
    body_top.classList.add("operation_top_body_hidden");
    
    let operation_buttons = document.getElementsByClassName('buttons_row')[0];
    console.log(operation_buttons)
    operation_buttons.classList.add("buttons_row_hidden");
  }
  const handleCancel = (e) => {
    e.preventDefault();
    let ele = document.getElementsByClassName('operation_form')[0];
    ele.classList.remove("operation_form_visible");
  }
  return (
    <form className='operation_form'>
      <div className='operation_top_body'>
      <div className='header_form'>
        <h3>Add new Operation</h3>
        <select id="type" name="types">
    <option value="0">Outcome</option>
    <option value="1">Income</option>
        </select>
      </div>
      <div className='amount form_row'>
      <input type="text" placeholder='amount...' />
      </div>
      <div className='concept form_row'>
        <input type="text" placeholder='concept...' />
        </div>
        </div>
      <div className='category form_row category_last_row'>
      </div>  
        <div className='category_row'>
          <div className='category_row_battery'>
            <select id="category" name="categories">
              <option value="defect">Category</option>
                <option value="food">Food</option>
                <option value="health">Health</option>
             </select>
            <button onClick={handleEventCategoryForm} className='add_category'>+</button>
        </div>

          <CategoryForm/>
        </div>
        
        <div className='buttons_row'>
        <button className='add_operation_button'>Add Operation</button>
        <button onClick={handleCancel}>Cancel</button>
        </div>
        
    </form>
  )

}
export default OperationForm;