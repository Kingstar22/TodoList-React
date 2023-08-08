import React from 'react'
import './TodoFooter.css'
import TodoFilters from '../todoFilters/TodoFilters'
import SearchPanel from '../searchPanel/SearchPanel'
const TodoFooter = ({ term, filter, setTerm, setFilter }) => {
    return (
        <>
            <footer className="todo-footer">
                <section className="search__panel">
                    <SearchPanel term={term} onSearchChange={setTerm} />
                    <TodoFilters filter={filter} onFilterSelect={setFilter} />
                </section>
            </footer>
        </>
    )
}

export default TodoFooter
