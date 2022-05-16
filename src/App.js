import React, { useState } from "react";
import './App.css'; 

function App() {
  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState([])

  const newTodoSubmit = (e) => {
    e.preventDefault();
    if (newTodo.length === 0){
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }
    setTodos([ ... todos, todoItem])
  };

  const deleteTodo = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    })
    setTodos(filteredTodos);
  }
  const toggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
      }
      return todo
    })
    setTodos(updatedTodos)
  }



  return (
    <div>
      <form onSubmit={(e) => {newTodoSubmit(e);}}>
        <input onChange={(e) => {setNewTodo(e.target.value);}}  type="text" value={newTodo}/>
      <div>
        <button>Add Item</button>
      </div>
      </form>
      {
        todos.map((todo, i) =>  {
          const todoClasses = [];
          if (todo.complete) {
            todoClasses.push("line-through")
          }
          return(
            <div className="display-flex">
              <input onChange={(e)=> {
                toggleComplete(i)
              }} checked={todo.complete} type="checkbox"/>
            <div key={i} className={todoClasses.join(" ")}>{todo.text} <button onClick={(e) => {deleteTodo(i);}}> Delete  </button></div>
            
            </div>


          );
        })

      }
    </div>
  );
}

export default App;
