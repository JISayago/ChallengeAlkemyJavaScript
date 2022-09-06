import React from 'react';

function CategoryForm() {


    const handleCancel = (e) => {
        e.preventDefault();
        let category_form = document.getElementsByClassName('category_form_')[0];
        category_form.classList.remove("category_form_visible");

        let body_top = document.getElementsByClassName('operation_top_body')[0];
        body_top.classList.remove("operation_top_body_hidden");
        
        let operation_buttons = document.getElementsByClassName('buttons_row')[0];
        operation_buttons.classList.remove("buttons_row_hidden");
    }
  return (
      <div className='category_form_'>
          <form action='http://localhost:3001/api/categories' method='POST' className='category_form'>
              <input type="text" name='categoryName' placeholder='category name...' />
              <button type='submit' className='category_button'>Add</button>
              <button onClick={handleCancel}>Cancel</button>
          </form>
      </div>
  )
}
export default CategoryForm;