import TodoItem from "./TodoItem"

export default function TodoList({todo, toggleTodo, deleteTodo}) {

    return (
    <ul className='list'>
        {todo.length === 0 && 'No Todos'}
        {todo.map(todo =>  {
        return (
            <TodoItem 
            id={todo.id} 
            completed={todo.completed} 
            title={todo.title}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            />
        )
        })}
  </ul>
)}