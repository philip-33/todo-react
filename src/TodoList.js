/*
Notes:
This file contains the function for handling the 'list' aspect of the todo list.

*/

import React from 'react'
import Todo from './Todo'

/*
This function is called when the App function returns this value: <TodoList todos={todos}/>
todos uses the useState() hook, and is just an array of objects. Specifically, a uuid, string (name), and boolean (checked/unchecked)
*/

export default function TodoList({ todos }) {
  return (
    // this map function returns an array of todo list items, but...
    // it's written to call the Todo function in Todo.js once for each <Todo ... />
    todos.map((todo, index) => {
        // even though this element is consumed and replaced by the Todo function,
        // react will still complain on the console if the key is not unique
        // because the keys are used to identify which elements should be re-rendered.
        return <Todo key={index} todo={todo} />
    })
  )
}
