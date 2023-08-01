
export const getStorageTodoList =() => {
    if(!localStorage["todoData"]) {
        localStorage["todoData"] = '[]'
    }
    const todoData = JSON.parse(localStorage.getItem("todoData"));
    return todoData
}

export const addStorageTodoItem =(todoItem) => {
    const todoData = getStorageTodoList();
    if (todoData === '[]') {
        localStorage.setItem(`todoData`, JSON.stringify(todoItem))
    }
    todoData.push(todoItem);
    localStorage["todoData"] = JSON.stringify(todoData);
}

export const changeStorageTodoItemStatus =(id) => {
    const todoData = getStorageTodoList();
    const itemIdx = todoData.findIndex((el) => el.id === id);
    todoData[itemIdx].isDone = !todoData[itemIdx].isDone;
    localStorage["todoData"] = JSON.stringify(todoData); 
}

export const updateStorageTodoItem =(id, editItemText) => {
    const todoData = getStorageTodoList();
    const itemIdx = todoData.findIndex((el) => el.id === id);
    todoData[itemIdx].text = editItemText
    localStorage["todoData"] = JSON.stringify(todoData); 
}

export const deleteStorageTodoItem =(id) => {
    const todoData = getStorageTodoList();
    const itemIdx = todoData.findIndex((el) => el.id === id);
    todoData.splice(itemIdx, 1);
    localStorage["todoData"] = JSON.stringify(todoData); 
}