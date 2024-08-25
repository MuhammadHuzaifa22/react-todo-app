import { useRef } from "react";
import { useState } from "react";

const App = () =>{

  const [todo,setTodo] = useState([]);
  const todoValue = useRef();

const addTodo = (event) =>{
  event.preventDefault();
  const inputValue = todoValue.current.value;
  if(inputValue === '' || inputValue === null){
    alert('Please fill the field');
    return
  }
console.log(todoValue.current.value);
todo.push(todoValue.current.value);
setTodo([...todo]);
}

function editTodo(index){
  const editedValue = prompt('Enter new todo');
  if(editedValue === '' || editedValue === null){
    alert('PLease re enter value');
    return
  }
todo.splice(index,1,editedValue);
setTodo([...todo]);
}



function deleteTodo(index){
todo.splice(index,1);
setTodo([...todo]);
}

  return(
    <>
    <div className="text-center bg-primary text-white p-2 rounded w-50 mx-auto mt-5">
      <h1>Todo App</h1>
      <form className="d-flex align-items-center justify-content-center" onSubmit={addTodo}>
        <input type="text"  placeholder="Enter todo" className="rounded fs-5 p-1" style={{width:'400px'}} ref={todoValue}/>
        <button className="btn btn-dark text-light  rounded fs-5">Add Todo</button>
      </form>
      <ul className="mt-4 list-unstyled d-flex flex-column gap-2">
        {todo.map((item,index)=>{
          return <div key={index}>
            <li className="bg-dark p-1  fs-5 text-white rounded w-50 text-start mx-auto d-flex flex-wrap text-break justify-content-between align-items-center"><div>{item}</div><div className="d-flex align-items-center gap-1"><button className="btn btn-md btn-primary border-0" onClick={() => editTodo(index)}>Edit</button><button className="btn btn-danger btn-md border-0" onClick={() => deleteTodo(index)}>Delete</button></div></li>
          </div>
        })}
      </ul>
    </div>
    </>
  )
}

export default App