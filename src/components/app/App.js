import React, { useState, } from 'react';
import './App.css';
import TodoItem from '../todoItem/TodoItem';
import TodoForm from '../todoForm/TodoForm';
// import TodoFilters from '../todoFilters/TodoFilters';

import icons from '../../assets/sprite.svg'
const App = () => {
	const [todos, setTodos] = useState([]);

	let keyItem = Math.floor( Math.random()* 10000 );

	const addTodoItem = (text) => {
		if (text.trim() !== '') {
		  const newTodoItem = {
			text: text,
            isDone: false,
            id: keyItem++
		  };
		  setTodos([...todos, newTodoItem]);
		}
	  };
	  const changeStatusTodoItem = (id) => {
		const itemIdx = todos.findIndex((el) => el.id === id);
        todos[itemIdx].isDone = !todos[itemIdx].isDone;
		setTodos([...todos]);
	
	
	  };
	  const updateTodoItem = (id, editItem) => {
		

	  };


	  const removeTodoItem = (id) => {
		const itemIdx = todos.findIndex((el) => el.id === id);
		 todos.splice(itemIdx, 1);
		 setTodos([...todos]);
	  };

	return (
		<div className="todo">
			<div className="todo-wrapper">
				<button
					type="button"
					className="todo__btn">
					<svg className="todo__icon">
						<use className="todo__icon-del" xlinkHref={`${icons}#cancel`}></use>
					</svg>
				</button>
				<TodoForm onAddTodoItem={addTodoItem}/>
				<ul className="todo__items">
					{todos.map((todo) => (
						<TodoItem 	todo={todo}
									key={todo.id}
									changeStatusTodo={changeStatusTodoItem}
									editTodoItem={updateTodoItem}
									removeTodoItem={removeTodoItem} />
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
