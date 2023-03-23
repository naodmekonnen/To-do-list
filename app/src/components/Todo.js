import React from 'react';
import List from './List';
const Todo = ({todos, setTodos, filteredTodos}) => {
    // console.log(todos);
    return(
        
        <div className="todo-container">
        <ul className="todo-list">
            {filteredTodos?.map((todo) => (
            <List 
            setTodos={setTodos} 
            todos={todos} 
            todo={todo}
            text={todo.text} 
            key={todo.id}/>
            ))}

        </ul>
      </div>
    )
}

export default Todo;