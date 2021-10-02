import React from 'react';
import { connect } from 'react-redux';
import {removeTodo} from '../redux/appreducer/actions'
import './tolist.css'

const Todolist = ({mainreducer, removeTodo}) => {
    return (
    <div className='container mt-3'>
        <h2 className='lead text-center'>To Do List</h2>
            {
              mainreducer.map((todo) => (
                <div className='card' key={todo.id}>
                    <p>{todo.value}<span className='remove' onClick={ () => removeTodo(todo.id)}>&#10005;</span></p>              
                 </div>
              ))}
    </div>
    )
}

const mapStateToprops = state => ({
    mainreducer: state.mainreducer.todolist
});

const mapDispatchToprops = dispatch => ({
    removeTodo: index => dispatch(removeTodo(index))
});

export default connect(mapStateToprops,mapDispatchToprops) (Todolist);
