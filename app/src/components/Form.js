import React from "react";

const Form = ({input,setInput,todo,setTodo, setStatus}) =>{
    const inputHandler = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTodo([...todo,
            {text: input, 
             completed:false, 
             id: Date.now()}])

        setInput('')
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

return(
        <>
        <input placeholder='Enter a task' value={input} onChange={inputHandler}type='text'></input>
        <button onClick={submitHandler} type='submit'>submit</button>
        <div>
            <select onChange={statusHandler} name='todo'>
                <option value ='all'>All</option>
                <option value ='completed'>Completed</option>
                <option value ='uncompleted'>Uncompleted</option>
            </select>
        </div>
       
        </>
    );
}

export default Form