import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router';

const OneTodo = () => {
    const [todo, setTodo] = useState({});
    const {id}  = useParams();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => res.json())
        .then(data => setTodo(data))
    },[]);

    const {title, completed} = todo;
    const condition = () =>{
      if(completed){
          return <i class="far right-icon fa-check-circle"></i>
       }
       else{
          return <i class="far wrong-icon fa-times-circle"></i>
       }
    };
  

    return (
        <div className='container todo-container'>
            <div className='row'>
                <div className='col-md-1'>
                  <h4> Todo</h4>
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

export default OneTodo;