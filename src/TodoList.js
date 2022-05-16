import React from 'react'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';

export default function TodoList({ todos }) {
  return (
    todos.map((todo, index) => {
        return <Todo key={index} todo={todo} />
    })
  )
}
