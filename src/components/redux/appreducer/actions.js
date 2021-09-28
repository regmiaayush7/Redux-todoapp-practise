
export const addTodo = value => ({
    type: 'ADD_TODO',
    payload : value
});

export const removeTodo = index =>({
    type: 'REMOVE_TODO',
    payload: index
});