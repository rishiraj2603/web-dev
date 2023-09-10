import React from 'react'
import {ImBin2} from 'react-icons/im'
const Todo = (props) => {
  return (
    <li> 
      <span>  Id -:{props.todo.id} -- : {props.todo.text} </span>
      <span onClick={()=> props.deleteItem(props.todo.id)}><ImBin2/></span>
      
      </li>
  )
}

export default Todo