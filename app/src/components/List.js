import React from "react";
import Counter from "./Counter";

const TodoList = ({text, todo, setTodo, task, handleIncrement, handleDecrement})=>{
 
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
            <input type = 'checkbox' 
            onChange ={ () =>{
            completedHandler();
            handleIncrement()
            }}></input>
            
            
            <button onClick={ () =>{
            deleteHandler();
            handleDecrement();
            }}>delete</button>
        </div>
    )
}

export default TodoList

{/* <button onClick ={completedHandler}>done</button> */}