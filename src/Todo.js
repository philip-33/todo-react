import React from 'react'

/*
This function returns a complete single todo in a <div> wrapper when called from TodoList
*/

export default function Todo({ todo }) {
  return (
    /*
    Real magic happens here. This return statement builds the html tag that is ultimately displayed to the user.
    It is called from <Todo key={index} todo={todo} /> in TodoList.js. 
    it doesn't have access to {index}, but has access to todo.name and todo.complete
    */
    <div>
        <input type="checkbox" checked={todo.complete}></input>
        {todo.name}
    </div>
  )
}
