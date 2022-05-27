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
    it includes onChange to handle checkbox toggles.

    braces allow for JS interpretation, and the usefulness of variables and functions being
    first class entities makes so much more sense now
    That is at least part of why todo.complete and handleTodoClick can be interpreted without extra syntax
    */
    <div>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}></input>
        {todo.name}
    </div>
  )
}
