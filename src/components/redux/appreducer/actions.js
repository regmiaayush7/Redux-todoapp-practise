
export const addTodo = value => ({
    type: 'ADD_TODO',
    payload : {
        id: new Date().getTime().toString(),
        value: value
    }
});

export const removeTodo = index =>({
    type: 'REMOVE_TODO',
    payload: index
});