import Form from './components/Form';
import Todo from './components/Todo';
import React, {useState, useEffect} from 'react'

function App(){

    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([]);
    const [status, setStatus] = useState('all')
    const [filtodo, setFiltodo] = useState([]);

useEffect(() =>{
    filterHandler();  
    saveLocal(); 
    getLocal();

},[todo, status])

const filterHandler = () =>{
        switch(status){
        
        case 'completed':
            setFiltodo(todo.filter(item => item.completed === true))
            break;
        case 'uncompleted':
            setFiltodo(todo.filter(item => item.completed === false))
            break;
        default:
            setFiltodo(todo)
            break;

    }
    }

    const saveLocal = () =>{
      localStorage.setItem('todo', JSON.stringify(todo))
        
    }
    const getLocal = () => {
        if(localStorage.getItem('todo') === null){
            localStorage.setItem('todo', JSON.stringify([]))
        }
        else{
            let localdata = localStorage.getItem('todo', JSON.stringify(todo))
            setTodo(localdata)
        }
    }

    return(
        <div className='App'>
    <header>
        <h1>To Do List</h1>
    </header>
    
    <Form input={input} 
          todo={todo} 
          setTodo={setTodo} 
          setInput={setInput}
          setStatus={setStatus}
          />
    
    <Todo  setTodo={setTodo} filtodo={filtodo} todo={todo}/>
        </div>
    )
}

export default App;