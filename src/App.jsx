import { useRef, useState } from "react";

const App = () =>{
 const [todo,setTodo] = useState([]);
 let todoValue = useRef();
 const [reverseMapping, setReverseMapping] = useState(false);

 const [filterSelectValue, setValue] = useState('1'); 

 const handleSelectChange = (event) => {
  const selectedValue = event.target.value;
  setValue(selectedValue);
  console.log(selectedValue);

  if (selectedValue === '1') {
    setReverseMapping(true);
  } else {
    setReverseMapping(false);
  }
};

console.log(reverseMapping);

const addTodo = (event) =>{
event.preventDefault();
if(todoValue.current.value === '' || todoValue.current.value === null){
  alert("Please fill the field");
  return
}
todo.push(todoValue.current.value);
setTodo([...todo]);
todoValue.current.value = '';
}


const editTodo = (index) =>{
  const editedValue = prompt("Enter new value");
  todo.splice(index,1,editedValue);
  setTodo([...todo]);
}


const deleteTodo = (index) => {
  todo.splice(index,1);
  setTodo([...todo]);
}

  return(
    <>
  <div className="text-center mx-auto mt-5 d-flex justify-content-center flex-column bg-primary text-white border-2 w-50 rounded p-2">
    <h1>Todo App</h1>
    <form className="d-flex align-items-center flex-column gap-2" onSubmit={addTodo}>
      <input type="text" placeholder="Enter todo" className="rounded text-primary p-1" ref={todoValue} style={{width:'600px',}} />
      <button className="rounded bg-dark text-light btn-sm border border-1 border-white fs-5">Add Todo</button>
    </form>
{todo.length > 0 ?  <div>
  <label for="filterSelect" className="form-label fs-4 mt-2">Filter by:</label>
        <select className="form-select mx-auto " style={{width:'200px'}} id="filterSelect" 
         value={filterSelectValue}
         onChange={handleSelectChange}>
          <option value="2">Oldest</option>
          <option value="1">Newest</option>
        </select>
</div>: null}
  

    <ul className="d-flex flex-column gap-1 mt-4">
  { reverseMapping === false  && todo.map((item,index)=>{
      return <div>
<li className="text-start d-flex flex-wrap text-break justify-content-between bg-dark fs-5 align-items-center rounded p-1 w-50 mx-auto"><div>{item}</div>
      <div className="d-flex gap-2">
        <button className="btn btn-sm btn-light rounded" onClick={() => editTodo(index)}>Edit</button><button className="btn btn-sm btn-danger rounded" onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      </li>
      </div>}
      )}
      
      { reverseMapping === true  && [...todo].reverse().map((item,index)=>{
      return <div>
<li className="text-start d-flex flex-wrap text-break justify-content-between bg-dark fs-5 align-items-center rounded p-1 w-50 mx-auto"><div>{item}</div>
      <div className="d-flex gap-2">
        <button className="btn btn-sm btn-light rounded" onClick={() => editTodo(index)}>Edit</button><button className="btn btn-sm btn-danger rounded" onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      </li>
      </div>}
      )}

    </ul>
  </div>
    </>
  )
}


export default App