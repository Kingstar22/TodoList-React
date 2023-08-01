/* eslint-disable default-case */
import React, { useState, useEffect} from 'react';
import './App.css';
import TodoItem from '../todoItem/TodoItem';
import TodoForm from '../todoForm/TodoForm';
import SearchPanel from '../searchPanel/SearchPanel';
import { getStorageTodoList, 
		 addStorageTodoItem, 
		 updateStorageTodoItem, 
		 changeStorageTodoItemStatus,
		 deleteStorageTodoItem
		} from '../service/service';
import icons from '../../assets/sprite.svg'
import TodoFilters from '../todoFilters/TodoFilters';

const App = () => {
	const [todos, setTodos] = useState([]);
	const [term, setTerm] = useState('');
	const [filter, setFilter] = useState('all');
	const [changedTodos, setСhangedTodos] = useState([]);

	let keyTodoItem = Math.floor( Math.random()* 10000 );  //?????????????

	const onReadTodoList = () => {
		setTodos(getStorageTodoList())
	
	}

	const onCloseTodoList = () => {
		setTodos([])
	}

	const addTodoItem = (text) => {
		if (text.trim() !== '') {
		const newTodoItem = {
			text: text,
			isDone: false,
			id: keyTodoItem++
		};
		addStorageTodoItem(newTodoItem);
		setTodos(getStorageTodoList());
		}
	};
	const changeStatusTodoItem = (id) => {
		changeStorageTodoItemStatus(id);
		setTodos(getStorageTodoList());

	
	
	};
	const updateTodoItem = (id, editItemText) => {
		updateStorageTodoItem(id, editItemText);
		setTodos(getStorageTodoList());

	};


	const deleteTodoItem = (id) => {
		deleteStorageTodoItem(id);
		setTodos(getStorageTodoList());
	};

	useEffect(() => {
		if (term.length === 0 && filter === 'all') {
			return setСhangedTodos(todos);
		}
		const searched = todos.filter(todo => {
			return todo.text.toLowerCase().indexOf(term.toLowerCase()) > -1
		})
		switch (filter) {
			case 'active':
				return	setСhangedTodos(searched.filter(todo => !todo.isDone));
			case 'done':
				return setСhangedTodos(searched.filter(todo => todo.isDone));
			case 'all':
				return setСhangedTodos(searched);
			default:
				return setСhangedTodos(searched);
		}

	}, [todos, term, filter]);

	
	  
	const todoItems = changedTodos.map((todo) => {
		return (
			<TodoItem 	
			todo={todo}
			key={todo.id}
			changeStatusTodo={changeStatusTodoItem}
			editTodoItem={updateTodoItem}
			deleteTodoItem={deleteTodoItem} />
		)
	})
	return (
		<>
			<div className="todo">
				<div className="todo-wrapper">
					<main className='todo-menu'>
						<button
								type="button"
								className="todo__btn"
								onClick={onCloseTodoList}
								>
								<svg className="todo__icon">
									<use className="todo__icon-del" xlinkHref={`${icons}#cancel`}></use>
								</svg>
						</button>
						<TodoForm onAddTodoItem={addTodoItem}
								  onReadTodoList ={onReadTodoList}
						/>
						<ul className="todo__items">
							{todoItems}
							{/* {todos.map((todo) => (
								<TodoItem 	todo={todo}
											key={todo.id}
											changeStatusTodo={changeStatusTodoItem}
											editTodoItem={updateTodoItem}
											removeTodoItem={removeTodoItem} />
							))} */}
						</ul>
					</main>
					<footer className='todo-footer'>
						<div className="search__panel">
							<SearchPanel term={term} onSearchChange={setTerm}/>
							<TodoFilters filter={filter} onFilterSelect={setFilter}/>
						</div>
					</footer>
				</div>
			</div>
		</>
	);
}

export default App;
