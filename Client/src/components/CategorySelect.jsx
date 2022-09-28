import React from 'react'

function CategorySelect(props) {
    const handleChange = () => {
    }
  return (
    <select onChange={e => handleChange} id="category" name="category">
              {
                props.categories.map(category =>
                  <option value={category.id}>{category.categoryName}</option>
                )
              }
            </select>
  )
}
export default CategorySelect;