const INITIAL_STATE = {
    todolist: [],
};

const Todoreducer = (state=INITIAL_STATE, action) =>{
    switch (action.type) {
        case 'ADD_TODO':
            return{
                ...state,
                todolist: [...state.todolist, action.payload]
            };
    
        case 'REMOVE_TODO':
                return {
                    ...state,
                    todolist:[ ...state.todolist.filter((todo, index) => index !== payload)]
                };
        default:
            return state;
     }        
    };
export default Todoreducer;

