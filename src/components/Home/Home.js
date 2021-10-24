import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';

const Home = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => setTodos(data))
    },[])
    return (
        <div className='container'>
            {
                todos.map(todo => <Todo todo={todo} key={todo.id} />)
            }
        </div>
    );
};

export default Home;