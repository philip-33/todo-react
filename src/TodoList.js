/*
Notes:
This file contains the function for handling the 'list' aspect of the todo list.

*/

import React from 'react'
import Todo from './Todo'

/*
This function is called when the App function returns this value: <TodoList todos={todos} toggleTodo={toggleTodo}/>
todos uses the useState() hook, and is just an array of objects. The objects consist of a uuid, string (name), and boolean (checked/unchecked)
*/

export default function TodoList({ todos, toggleTodo }) {
  return (
    // this map function returns an array of todo list items, but...
    // it's written to call the Todo function in Todo.js once for each <Todo ... />
    todos.map((todo) => {
        // even though this element is consumed and replaced by the return value of 
        // the add Todo function,
        // react will still complain on the console if the key is not unique
        // this line is essentially a special kind of function call
        return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    })
  )
}
