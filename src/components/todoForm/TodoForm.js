import React, { useState } from 'react'
import './TodoForm.css'
import { getStorageTodoList, addStorageTodoItem } from '../service/service'
const TodoForm = ({ setTodos, readTodo, onReadTodoList, onShowAlert }) => {
    let keyTodoItem = Math.floor(Math.random() * 10000)
    const [newItem, setNewItem] = useState('')

    const handleInputChange = (e) => {
        setNewItem(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        addTodoItem(newItem)
        onShowAlert()
        setNewItem('')
    }

    const addTodoItem = (text) => {
        if (text.trim() !== '') {
            const newTodoItem = {
                text: text,
                isDone: false,
                id: keyTodoItem++,
            }
            addStorageTodoItem(newTodoItem)
            if (readTodo) {
                setTodos(getStorageTodoList())
            }
        }
    }

    return (
        <form className="todo__new" onSubmit={handleFormSubmit}>
            <label className="todo__new-label">
                Create Todo List:
                <input
                    className="todo__new-input"
                    type="text"
                    value={newItem}
                    onChange={handleInputChange}
                />
            </label>
            <button className="todo__new-btn" type="submit">
                Add
            </button>
            <button
                className="todo__read-btn"
                type="button"
                onClick={onReadTodoList}
            >
                Open
            </button>
        </form>
    )
}

export default TodoForm
