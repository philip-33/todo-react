import React from 'react'

/*
This function returns a complete single todo in a <div> wrapper when called from TodoList
*/

export default function Todo({ todo, toggleTodo }) {

  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    /*
    Real magic happens here. This return statement builds the html tag that is ultimately displayed to the user.
    It is called from <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} /> in TodoList.js. 
    it includes onChange to handle toggles
    */
    <div>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}></input>
        {todo.name}
    </div>
  )
}
