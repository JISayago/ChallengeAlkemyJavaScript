import React from 'react'

function CategoryForm() {
  return (
      <div className='category_form_'>
          <form className='category_form'>
              <input type="text" placeholder='category name...' />
              <button className='category_button'>Add Category</button>
          </form>
      </div>
  )
}
export default CategoryForm;