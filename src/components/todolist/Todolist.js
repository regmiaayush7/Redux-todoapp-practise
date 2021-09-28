import React from 'react';
import { connect } from 'react-redux';
import {removeTodo} from '../redux/appreducer/actions'
import './tolist.css'

const Todolist = ({mainreducer, removeTodo}) => {
    return (
    <div className='container mt-3'>
        <h2 className='lead text-center'>To Do List</h2>
            {
              mainreducer.map((todo,index) => (
                <div className='card' key={index}>
                    <p>{todo}<span className='remove' onClick={ index => removeTodo(index)}>&#10005;</span></p>              
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
