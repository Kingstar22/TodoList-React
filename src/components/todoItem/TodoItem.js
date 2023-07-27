import React from 'react';
import './TodoItem.css';
import icons from '../../assets/sprite.svg'
const TodoItem = ({ todo, changeStatusTodo, editTodoItem, removeTodoItem  }) => {

   let editItem = false;
    // const changeStatusTodoItem =() => {
	// 	changeStatusTodo(todo.id)
	// }
    // const updateTodoItem =() => {
	// 	editTodoItem(todo.id)
	// }
    // const deleteTodoItem =() => {
	// 	removeTodoItem(todo.id)
	// }

    return (
    <li className= {`color-${todo.isDone}`}>
    {!editItem ?
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
                    onClick={() => editTodoItem(todo.id, editItem)}
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
        :<h1>test</h1>}
    </li>
        
     
    );
  };
  
export default TodoItem;