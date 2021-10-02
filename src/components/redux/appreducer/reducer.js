const INITIAL_STATE = {
    todolist: [],
};

const Todoreducer = (state=INITIAL_STATE, action) =>{
    switch (action.type) {
        case 'ADD_TODO':
            const {id,value} = action.payload;
            return{ 
                ...state,
                todolist:[...state.todolist,{
                    id: id,
                    value: value
                }]
            };
    
        case 'REMOVE_TODO':
            
                return {
                    ...state,
                    todolist:[...state.todolist.filter((todo) => todo.id !== action.payload)]
                };
        default:
            return state;
     }        
    };
export default Todoreducer;

