import React, { useState, useEffect } from 'react'
import './TodoMenu.css'
import TodoForm from '../todoForm/TodoForm'
import TodoItem from '../todoItem/TodoItem'
import icons from '../../assets/sprite.svg'
import { getStorageTodoList } from '../service/service'
const TodoMenu = ({ setShowAlert, term, filter }) => {
    const [todos, setTodos] = useState([])
    const [changedTodos, setСhangedTodos] = useState([])
    const [readTodo, setReadTodo] = useState(false)

    const onShowAlert = () => {
        if (!readTodo) {
            setShowAlert(true)
        }
    }

    const onReadTodoList = () => {
        setTodos(getStorageTodoList())
        setReadTodo(true)
    }

    const onCloseTodoList = () => {
        setTodos([])
        setReadTodo(false)
    }

    useEffect(() => {
        if (term.length === 0 && filter === 'all') {
            return setСhangedTodos(todos)
        }
        const searched = todos.filter((todo) => {
            return todo.text.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
        switch (filter) {
            case 'active':
                return setСhangedTodos(searched.filter((todo) => !todo.isDone))
            case 'done':
                return setСhangedTodos(searched.filter((todo) => todo.isDone))
            case 'all':
                return setСhangedTodos(searched)
            default:
                return setСhangedTodos(searched)
        }
    }, [todos, term, filter])

    const todoItems = changedTodos.map((todo) => {
        return <TodoItem setTodos={setTodos} todo={todo} key={todo.id} />
    })

    return (
        <>
            <section className="todo-menu">
                <button
                    type="button"
                    className="todo__btn"
                    onClick={onCloseTodoList}
                >
                    <svg className="todo__icon">
                        <use
                            className="todo__icon-del"
                            xlinkHref={`${icons}#cancel`}
                        ></use>
                    </svg>
                </button>
                <TodoForm
                    setTodos={setTodos}
                    readTodo={readTodo}
                    onShowAlert={onShowAlert}
                    onReadTodoList={onReadTodoList}
                />
                <ul className="todo__items">{todoItems}</ul>
            </section>
        </>
    )
}

export default TodoMenu
