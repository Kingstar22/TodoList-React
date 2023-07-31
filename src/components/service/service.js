


    

const getTodoList =(todoItem) => {
    console.log(1)
    const value = localStorage.getItem('todos');
    if (value) {
        return JSON.parse(value);
    } else {
        return  localStorage.setItem('todos', JSON.stringify(todoItem))
    }
}

// const addTodoItem =() => {
    
// }

    // 

    // removeTodoItem

    // changeTodoItemStatus

    // updateTodoItem



export  {getTodoList};