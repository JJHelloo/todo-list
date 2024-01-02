import { useState, useEffect } from 'react'
import NewTodoForm from '../componets/NewTodoForm.jsx';
import TodoList from "../componets/TodoList.jsx";
import "./style.css";

function App() {
  const [todo, setTodo] = useState(() => {
    try {
      const localValue = localStorage.getItem("ITEMS");
      return localValue ? JSON.parse(localValue) : [];
    } catch (error) {
      console.error("Error parsing todos from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todo));
  }, [todo]);

  function addTodo(title) {
    setTodo(currentTodo => {
      return [
        ...currentTodo,
        {id: crypto.randomUUID(), title, completed: false},
      ]
    })
  }


  function toggleTodo (id, completed) {
    setTodo(currentTodo => {
      return currentTodo.map(todo =>{
        if (todo.id === id) {
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodo(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
    <h1 className='header'>Todo list</h1>
    <NewTodoForm onSubmit={addTodo}/>
    <TodoList todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
