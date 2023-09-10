import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
  const list = props.todos.map(items =>{
    return <Todo key={items.id} todo={items} deleteItem={props.deleteItem}></Todo>
  });
  return (
    <div>{list}</div>
  )
}

export default TodoList