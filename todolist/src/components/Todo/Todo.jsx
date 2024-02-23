import React from 'react';
import './Todo.css'

const todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div className="todo">
      <div className='content' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}> 
          <p>{todo.text}</p>
          <p className='category'> {todo.category} </p>
          <div className='botoes'>
              <button onClick={()=> completeTodo(todo.id)} >Completar</button>
              <button onClick={()=> removeTodo(todo.id)}>Remover</button>
          </div>
      </div>
    </div>  
  )
}

export default todo