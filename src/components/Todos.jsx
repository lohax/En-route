import React from 'react';
import Todo from './Todo'

const Todos = ({ todos }) => { // {todos} directement en destrucuring pour eviter de mettre toujours props.todos
    return (
        <ul className='todos'>
            {todos && todos.map(todo => ( // le todo && todo.map est une maniere de faire un if true
                <Todo
                    key={todo.id}
                    todo={todo}
                    url={todo.id}
                    
                />
            ))}
        </ul>
    );
};

export default Todos;