import React from 'react'
import CategoryForm from './CategoryForm';

function OperationForm() {
  const handleEventCategoryForm = (e) => {
    e.preventDefault();
    let element = document.getElementsByClassName('category_form_')[0];
    element.classList.add("category_form_visible");
  }
  return (
    <form className='operation_form'>
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
      <div className='category form_row category_last_row'>
        <div className='category_row'>
          <div className='category_row_battery'>
             <select id="category" name="categories">
                <option value="food">Food</option>
                <option value="health">Health</option>
             </select>
            <button onClick={handleEventCategoryForm} className='add_category'>+</button>
        </div>

          <CategoryForm/>
        </div>
        
        <button className='add_operation_button'>Add Operation</button>
        </div>
    </form>
  )

}
export default OperationForm;