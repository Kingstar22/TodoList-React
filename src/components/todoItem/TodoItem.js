import React, {useState} from 'react';
import './TodoItem.css';
import icons from '../../assets/sprite.svg'
const TodoItem = ({ todo, changeStatusTodo, editTodoItem, deleteTodoItem  }) => {

    const [editStateItem, setEditStateItem] = useState(false);

    const changeStateItem =() => {
        setEditStateItem(!editStateItem)
    
    }
    const ShowTodoItem =() => {
        return (
            <div className="todo__item " >
                <label className="todo__item-label">
                    <input
                        type="checkbox"
                        defaultChecked={todo.isDone}
                        onChange={() => changeStatusTodo(todo.id) }
                        className="todo__item-checkbox "
                    />
                    {todo.isDone ? <div className='todo__item-text'>
                                        <del>
                                            <span >{todo.text}</span>
                                        </del>
                                    </div> 
                                 : 
                                    <div className='todo__item-text'>
                                        <span>{todo.text}</span> 
                                    </div>
                    }
                                   
                                   
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
                        onClick={() => deleteTodoItem(todo.id) }>
                        <svg className="todo__icon">
                            <use className="todo__icon-del" xlinkHref={`${icons}#trash`}></use>
                        </svg>
                    </button>
                </div>
            </div>
        )
    }

    const ShowUpdateTodoItem =() => {
   
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
            <>
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
            </>
        )
	}
 
    return (
        <li className= {`color-${todo.isDone}`}>
            {!editStateItem ? <ShowTodoItem /> : <ShowUpdateTodoItem /> }
        </li>
    );
};
  
export default TodoItem;