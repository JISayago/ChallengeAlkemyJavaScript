import React, { useContext, useEffect, useState } from 'react';
import CategoryForm from './CategoryForm';
import axios from 'axios';
import OperationListContext from '../context/OperationListContext';
import UserLoggedContext from '../context/UserLoggedContext';
import CategorySelect from './CategorySelect';
function OperationForm() {

  const [categories, setCategories] = useState([]);
  const { operationList, setOperationList } = useContext(OperationListContext);
  const { userLogged } = useContext(UserLoggedContext);
  const [categoryChange, setCategoryChange] = useState(false)
  
  
  const useSetCategories = (res) => {
    setCategories([...categories, res])
  }

  useEffect(() => {
    axios.get('http://localhost:3001/api/categories')
      .then(res => setCategories(res.data))
      .catch(error => console.log(error))
  }, [categoryChange])

  const handleSave = (e) => {
    e.preventDefault();
    let typeOf = document.getElementsByName("typeOf")[0].value;
    let concept = document.getElementsByName("concept")[0].value;
    let categoryId = document.getElementsByName("category")[0].value;
    let amount = document.getElementsByName("amount")[0].value;
    let date = new Date();
      
    axios.post(`http://localhost:3001/api/operations`,
      {
        amount: amount,
        concept: concept,
        date: new Date(date),
        typeOf: typeOf,
        userId: userLogged.id,
        categoryId: categoryId
        
      })
      .then(response => setOperationList([...operationList,response]))
      .catch(function (error) {
        console.log(error);
      })
  }

    const handleEventCategoryForm = (e) => {
      e.preventDefault();
      let element = document.getElementsByClassName('category_form_')[0];
      element.classList.add("category_form_visible");

      let body_top = document.getElementsByClassName('operation_top_body')[0];
      body_top.classList.add("operation_top_body_hidden");
    
      let operation_buttons = document.getElementsByClassName('buttons_row')[0];
      operation_buttons.classList.add("buttons_row_hidden");
    }
    const handleCancel = (e) => {
      e.preventDefault();
      let ele = document.getElementsByClassName('operation_form')[0];
      ele.classList.remove("operation_form_visible");
    }
    return (
      <form className='operation_form'>
        <input type="hidden" name="date" value={new Date()} />
        <div className='operation_top_body'>
          <div className='header_form'>
            <h3>Add new Operation</h3>
            <select id="type" name="typeOf">
              <option value="0">Outcome</option>
              <option value="1">Income</option>
            </select>
          </div>
          <div className='amount form_row'>
            <input type="text" name="amount" placeholder='amount...' />
          </div>
          <div className='concept form_row'>
            <input type="text" name='concept' placeholder='concept...' />
          </div>
        </div>
        <div className='category form_row category_last_row'>
        </div>
        <div className='category_row'>
          <div className='category_row_battery'>
            <CategorySelect categories={categories } />
            <button onClick={handleEventCategoryForm} className='add_category'>+</button>
          </div>
          <CategoryForm
            useSetCategories={useSetCategories}
            setCategoryChange={setCategoryChange}
            categoryChange={categoryChange} />
        </div>
        
        <div className='buttons_row'>
          <button onClick={(e) => handleSave(e)} className='add_operation_button'>Add Operation</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
        
      </form>
    )

  
}
export default OperationForm;