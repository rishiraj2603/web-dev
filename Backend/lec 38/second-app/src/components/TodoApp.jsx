import React, { useState } from 'react'
import TodoList from './TodoList';
import InpurForm from './InpurForm';
import { v4 as uuid } from 'uuid';

const TodoApp = () => {
  const dummy_Todos = [
    {id:uuid(), text:'Buy Groceries'},
    {id:uuid(), text:'Learn React'},
    {id:uuid(), text:'Go to Gym'},
    {id:uuid(), text:'Make food'}
  ]

  const [todos , setTodos] = useState(dummy_Todos);

  function deleteItem(id){
    const newTodo = todos.filter(item => item.id !== id)
    setTodos(newTodo)
  }

  function addTodo(data){
    const newTodo = [...todos,data];
    setTodos(newTodo)
  } 

  return (  
    <div> 
      <InpurForm todos={todos} addTodo={addTodo}></InpurForm>
      <TodoList todos={todos} deleteItem={deleteItem}/> </div>
  )
}

export default TodoApp