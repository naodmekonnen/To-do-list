import React from "react";

const TodoList = ({text, todo, setTodo, task})=>{
 
const deleteHandler = () =>{
    setTodo(todo.filter((item) => item.id !== task.id))
}

const completedHandler = () => {
    setTodo(todo.map(item => {
        if(item.id === task.id){
    return {...item, completed: !item.completed
    }
        }
        return item;
    }))
}

return(
        <div>
            <li>{text}</li>
            <input type = 'checkbox' onChange={completedHandler}></input>
            {/* <button onClick ={completedHandler}>done</button> */}
            <button onClick={deleteHandler}>delete</button>
        </div>
    )
}

export default TodoList
