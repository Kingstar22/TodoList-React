import React, { useState } from 'react'
import './TodoItem.css'
import icons from '../../assets/sprite.svg'
import {
    getStorageTodoList,
    updateStorageTodoItem,
    changeStorageTodoItemStatus,
    deleteStorageTodoItem,
} from '../service/service'
const TodoItem = ({ todo, setTodos }) => {
    const [editStateItem, setEditStateItem] = useState(false)

    const changeStateItem = () => {
        setEditStateItem(!editStateItem)
    }

    const changeStatusTodoItem = (id) => {
        changeStorageTodoItemStatus(id)
        setTodos(getStorageTodoList())
    }

    const updateTodoItem = (id, editItemText) => {
        updateStorageTodoItem(id, editItemText)
        setTodos(getStorageTodoList())
    }

    const deleteTodoItem = (id) => {
        deleteStorageTodoItem(id)
        setTodos(getStorageTodoList())
    }

    const ShowTodoItem = () => {
        return (
            <div className="todo__item ">
                <div className="todo__item-label">
                    <input
                        type="checkbox"
                        defaultChecked={todo.isDone}
                        onChange={() => changeStatusTodoItem(todo.id)}
                        className="todo__item-checkbox "
                    />
                    {todo.isDone ? (
                        <div className="todo__item-text">
                            <del>
                                <span>{todo.text}</span>
                            </del>
                        </div>
                    ) : (
                        <div className="todo__item-text">
                            <span>{todo.text}</span>
                        </div>
                    )}
                </div>
                <div>
                    <button
                        type="button"
                        className="todo__item-btn"
                        onClick={changeStateItem}
                        disabled={todo.isDone}
                    >
                        <svg className="todo__icon">
                            <use
                                className="todo__icon-edit"
                                xlinkHref={`${icons}#pencil`}
                            ></use>
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="todo__item-btn"
                        onClick={() => deleteTodoItem(todo.id)}
                    >
                        <svg className="todo__icon">
                            <use
                                className="todo__icon-del"
                                xlinkHref={`${icons}#trash`}
                            ></use>
                        </svg>
                    </button>
                </div>
            </div>
        )
    }

    const ShowUpdateTodoItem = () => {
        const [editItemText, setEditItemText] = useState(`${todo.text}`)
        const handleInputChange = (e) => {
            setEditItemText(e.target.value)
        }

        const handleFormSubmit = (e) => {
            e.preventDefault()
            updateTodoItem(todo.id, editItemText)
            setEditItemText('')
            setEditStateItem(!editStateItem)
        }
        const cancelEditItem = () => {
            setEditStateItem(!editStateItem)
        }

        return (
            <>
                <form className="todo__item" onSubmit={handleFormSubmit}>
                    <div className="todo__item-label">
                        <input
                            type="text"
                            className="todo__item-input"
                            value={editItemText}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <button type="submit" className="todo__item-btn">
                            <svg className="todo__icon">
                                <use
                                    className="todo__icon-edit"
                                    xlinkHref={`${icons}#check`}
                                ></use>
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={cancelEditItem}
                            className="todo__item-btn"
                        >
                            <svg className="todo__icon">
                                <use
                                    className="todo__icon-del"
                                    xlinkHref={`${icons}#cancel`}
                                ></use>
                            </svg>
                        </button>
                    </div>
                </form>
            </>
        )
    }

    return (
        <li className={`color-${todo.isDone}`}>
            {!editStateItem ? <ShowTodoItem /> : <ShowUpdateTodoItem />}
        </li>
    )
}

export default TodoItem
