import './TodoFilters.css';
const TodoFilters = ({filter, onFilterSelect}) => {

	const btnsData = [
                {name: 'all', label: 'All'},
                {name: 'done', label: 'Done'},
                {name: 'active', label: 'Active'}
    ];


    const btns = btnsData.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? 'btn-active' : null;
        return (
            <button type="button"
                    className={`filter__btn ${clazz}`}
                    key={name}
                    onClick={() => onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="filters__btn">
            {btns}
        </div>
    )
	
}
  
export default TodoFilters;