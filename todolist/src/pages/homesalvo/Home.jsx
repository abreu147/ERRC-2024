import '../../App.css';
import './Home.css'
import { useState } from 'react';
import Todo from '../../components/Todo/Todo.jsx';
import React from 'react';
import TodoForm from '../../components/TodoForm/TodoForm.jsx';

function Home() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar nova lista",
      category: "Trabalho",
      isCompleted: false
    },
    {
      id: 2,
      text: "Checar a lista de compras",
      category: "Pessoal",
      isCompleted: false
    },
    {
      id: 3,
      text: "Ler livro de react",
      category: "Estudos",
      isCompleted: false
    }
  ]);

  const addTodo = (text, category) =>{
    const newTodos = [...todos, {
      id: Math.floor(Math.random()* 10000), 
      text,
      category,
      isCompleted: false,
    },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) =>{
    console.log("não entrou");
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo=> 
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  }
  const completeTodo = (id) =>{
    const newTodos = [...todos]
    newTodos.map((todo)=> todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos);
  }



  return (
    <div className="Home">
      
      <div className='cardTodo'>
        <h1>Lista de Tarefas</h1>
        {todos.map((todo) => (
          <Todo key={todo.id}  todo = {todo} removeTodo = {removeTodo} completeTodo = {completeTodo}/> 
        ))}
      </div>
      <TodoForm addTodo= {addTodo} />
    </div>
  );
  
}

export default Home;
