import React,{useState} from 'react'
import Todolist from '../todolist/Todolist'
import {connect} from 'react-redux'
import {addTodo} from '../redux/appreducer/actions'
import './formbody.css'

const FormBody = ({addTodo}) => {
    const [records, Setrecords]= useState('');

    const handleChange = (e) => {
        e.preventDefault();
        Setrecords(e.target.value);
        console.log(records);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(records)
        Setrecords('');
    }

    return (
        <div className= 'form container mt-3'>
           <form className='container' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Enter Task To Add :</label>
                    <input type='text'
                     className='form-control' 
                     placeholder='Enter Task' 
                     onChange= {handleChange}
                     value={records}
                     required/> 
                     <button type="submit" 
                     className="btn btn-dark mt-2">Add</button>
                </div>
                <div>
                </div>
            </form> 
            <Todolist/>
        </div>
    )
}

const mapDispatchToprops = dispatch => ({
    addTodo: records => dispatch(addTodo(records))
});
export default connect(null,mapDispatchToprops)(FormBody);
