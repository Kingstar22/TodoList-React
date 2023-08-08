import React, { useState } from 'react'
import './App.css'
import TodoMenu from '../todoMenu/TodoMenu'
import TodoFooter from '../todoFooter/TodoFooter'
import FloatingAlert from '../floatingAlert/FloatingAlert'

const App = () => {
    const [term, setTerm] = useState('')
    const [filter, setFilter] = useState('all')
    const [showAlert, setShowAlert] = useState(false)

    return (
        <>
            <main className="todo">
                <FloatingAlert
                    showAlert={showAlert}
                    setShowAlert={setShowAlert}
                />
                <div className="todo-wrapper">
                    <TodoMenu
                        setShowAlert={setShowAlert}
                        term={term}
                        filter={filter}
                    />
                    <TodoFooter
                        term={term}
                        filter={filter}
                        setTerm={setTerm}
                        setFilter={setFilter}
                    />
                </div>
            </main>
        </>
    )
}

export default App
