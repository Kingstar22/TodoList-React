import React, {useState} from 'react';
import './TodoItem.css';
import icons from '../../assets/sprite.svg'
const TodoItem = ({ todo, changeStatusTodo, editTodoItem, removeTodoItem  }) => {

    const [editStateItem, setEditStateItem] = useState(false);
   

    const changeStateItem =() => {
        setEditStateItem(!editStateItem)
    
    }
    const TodoItem =() => {
        return (
            <div className="todo__item " >
                <label className="todo__item-label">
                    <input
                        type="checkbox"
                        defaultChecked={todo.isDone}
                        onChange={() => changeStatusTodo(todo.id) }
                        className="todo__item-checkbox "
                    />
                    {todo.isDone ? <del><span>{todo.text}</span></del>: <span>{todo.text}</span>}
            
                </label>
                <div>
                    <button
                        type="button"
                        className="todo__item-btn"
                        onClick={changeStateItem}
                        >
                        <svg className="todo__icon">
                            <use className="todo__icon-edit" xlinkHref={`${icons}#pencil`}></use>
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="todo__item-btn"
                        onClick={() => removeTodoItem(todo.id) }>
                        <svg className="todo__icon">
                            <use className="todo__icon-del" xlinkHref={`${icons}#trash`}></use>
                        </svg>
                    </button>
                </div>
            </div>
        )
    }

    const UpdateTodoItem =() => {
   
        const [editItemText, setEditItemText] = useState(`${todo.text}`)
        const handleInputChange = (e) => {
        
            setEditItemText(e.target.value);
        };
        
        const handleFormSubmit = (e) => {
            e.preventDefault();
            editTodoItem(todo.id, editItemText);
            setEditItemText('');
            setEditStateItem(!editStateItem)
        };

		return (
            <form   className="todo__item"
                    onSubmit={handleFormSubmit}>
                <label className="todo__item-label">
                    <input
                        
                        type="text"
                        className="todo__item-input"
                        value={editItemText} 
                        onChange={handleInputChange}
                    />
                </label>
                <div>
                    <button
                        type="submit"
                        // disabled={!text}
                        className="todo__item-btn">
                        <svg className="todo__icon">
                            <use className="todo__icon-edit" xlinkHref={`${icons}#check`}></use>
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="todo__item-btn">
                        <svg className="todo__icon">
                            <use className="todo__icon-del" xlinkHref={`${icons}#cancel`}></use>
                        </svg>
                    </button>
                </div>
            </form> 
        )
	}
 
    return (
    <li className= {`color-${todo.isDone}`}>
        {!editStateItem ? <TodoItem /> : <UpdateTodoItem  /> }
    </li>
        
     
    );
  };
  
export default TodoItem;