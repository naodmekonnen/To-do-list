import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';



const List = ({ text, todo, todos, setTodos }) => {
    // Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        })
        );
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <FontAwesomeIcon
            className="complete-btn" 
            icon={faCircleCheck}
            onClick={completeHandler}
            /> 
           
            <FontAwesomeIcon
            className="trash-btn"  
            icon={faTrashCan}  
            onClick={deleteHandler} 
            />
                
            
        </div>
    );
}

export default List;