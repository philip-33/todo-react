import React, { useState, useRef, useEffect } from 'react'; // HOOOOOOKS
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() { //hooks can only be used within in 'function' components, not classes
  // Once the function is called from index.js, the App function behaves
  // like a 'main' loop for the react app.

  /* initialize the state of the hooks */
  // use the setState hook to manage a single component at a time: todos and setTodos
  // IMPORTANT NOTE: Don't modify useState variables within functions, create a new local var and use the set to apply it when done
  const [todos, setTodos] = useState([]) // one function to init the todo list (to an empty array), another to set the list cotent.
  const todoNameRef = useRef() /* another hook that tracks a single mutable value */

  // this use of useEffect retrieves any todos stored in localstorage and
  // places them onto the list, very useful. the code to read must come before the code to write.
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos.length !== 0) setTodos(storedTodos)
  }, [])

  // this hook monitors [todos] and runs the function when it changes
  // in this case, it writes the todos to localstorage as a JSON string
  // but it requires another function to retrieve the todos from storage (above)
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  // separate function to handle clicking the checkbox. it's big because
  // the toggle manipulation has to happen in a separate variable before being written back (set)
  function toggleTodo(id) {
    const newTodos = [...todos] // this is a copy, see IMPORTANT NOTE for useState
    const todo = newTodos.find(todo => todo.id === id) // find the todo with the matching id
    todo.complete = !todo.complete // clever way to toggle a boolean, regardless of current value
    // the following setTodos(newTodos) only works because of JS memory gymnastics: 
    // const todo stores an address to the object stored in the newTodos array,
    // so modifying it with todo.complete then setting it with setTodos(newTodos) works here.
    setTodos(newTodos)
  }

  // this function triggers when the 'add todo' button is clicked
  // it takes a event (e) as an argument.
  function handleAddTodo(e) {
    const name = todoNameRef.current.value // pull the name out of the object for repeated use
    if (name === '') return
    // When the 'setTodos' value is written, the whole app is re-rendered
    // this arrow function uses the label 'prevTodos' for the current list of todos
    setTodos(prevTodos => {
      // spread prevtodos to ensure that old content/state is preserved
      // append the new info to the array and return the whole thing
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null // blank out the name within the ref to avoid unintended side effects
  }

  function handleClearTodos(e) {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  // although at the end of the function, this return value draws the app interface.
  return (
    <> {/* react comments use a different syntax */}
      <TodoList todos={todos} toggleTodo={toggleTodo}/> {/* this calls the TodoList function with todos and toggleTodo as arguments */}
      <input ref={todoNameRef} type="text" /> {/* this input field is configured to treat the content of the field as a variable called 'todoNameRef' */}
      <button onClick={handleAddTodo}>Add Todo</button> {/* the button triggers the 'handleAddTodo' function when clicked */}
      <button onClick={handleClearTodos}>Clear Complete</button> {/*  */}
      <div>{todos.filter(todo => !todo.complete).length} left to do</div> {/*  */}
    </>
  )
}

export default App;
