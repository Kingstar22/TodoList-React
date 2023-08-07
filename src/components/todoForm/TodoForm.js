import React, { useState } from 'react';
import './TodoForm.css';
const TodoForm = ({ onAddTodoItem, onReadTodoList,onShowAlert }) => { 

    const [newItem, setNewItem] = useState('');
    
    const handleInputChange = (e) => {
        setNewItem(e.target.value);
    };
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        onAddTodoItem(newItem);
        onShowAlert()
        setNewItem('');
    };
  

    return (
    <form   className="todo__new"
            onSubmit={handleFormSubmit}>
        <label className="todo__new-label">
            Create Todo List:
            <input  className="todo__new-input" 
                    type="text" 
                    value={newItem} 
                    onChange={handleInputChange}/>
        </label>
        <button className="todo__new-btn" type="submit">Add</button>
        <button  className="todo__read-btn"
                 type="button" 
                 onClick={onReadTodoList} 
                 >Open</button>
    </form>
    );
  };
  
export default TodoForm;