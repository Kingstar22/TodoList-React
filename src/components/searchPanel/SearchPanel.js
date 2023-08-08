import React from 'react'
import './SearchPanel.css'

const SearchPanel = ({ term, onSearchChange }) => {
    const handleSearchChange = (e) => {
        onSearchChange(e.target.value)
    }
    return (
        <>
            <input
                type="text"
                value={term}
                onChange={handleSearchChange}
                className="search__panel-input"
                placeholder="find a task"
            />
        </>
    )
}

export default SearchPanel
