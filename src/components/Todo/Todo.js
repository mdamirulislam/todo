import React from 'react';
import { useHistory } from 'react-router';
import './Todo.css'

const Todo = (props) => {
    const {title, completed, id} = props.todo;
  const condition = () =>{
    if(completed){
        return <i class="far right-icon fa-check-circle"></i>
     }
     else{
        return <i class="far wrong-icon fa-times-circle"></i>
     }
  };
  const history = useHistory();
  const handleTodo = () => {

    history.push(`./onetodo/${id}`)

  }
    return (
        <div className='todo-container '>
            <div className='row'>
                <div className='col-md-1'>
                  <button onClick={handleTodo} className='btn btn-primary'>veiew</button>
                </div>
                <div className='col-md-9'>
                 <h1 className='title'>{title}</h1>
                </div>
                <div className='col-md-2'>
                {condition()}
                </div>
            </div>
        </div>
    );
};

export default Todo;