import React from 'react'

function OperationRegisterForm() {
  return (
    <form>
      <input type="text" />
      <input type="text" />
      <select id="category" name="categories">
    <option value="comida">Comida</option>
    <option value="salud">Salud</option>
  </select>
    </form>
  )

}
export default OperationRegisterForm;