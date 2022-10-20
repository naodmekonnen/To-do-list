import React from "react";
import List from "./List";


const TodoList = ({todo,setTodo,filtodo}) =>{
    console.log(filtodo)
    return(
        <div>
            <ul key={todo.id}>
            {filtodo.map(task =>(
                <List key={task.id} 
                      text={task.text}
                      todo={todo}
                      task={task}
                      setTodo={setTodo}
                      filtodo={filtodo}
                      />
            ))}
            </ul>
            
        </div>
    )
}

export default TodoList;