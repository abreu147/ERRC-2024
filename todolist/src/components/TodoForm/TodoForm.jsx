import React from 'react'
import { useState } from 'react'
import "./TodoForm.css"
function TodoForm({addTodo}) {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviou form!")
        if (!value || !category) return;
        addTodo(value, category);
        setValue("");
        setCategory("");        
    }
    return (
        <div className='todo-form'>
            <h2>Criar Tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    value={value}
                    type='text'
                    placeholder='digite a tarefa' 
                    onChange={(e) => setValue(e.target.value)}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)} >
                    <option value="">Selecione uma categoria de tarefa</option>
                    <option value="Trabalho">Trabalho</option>    
                    <option value="Pessoal">Pessoal</option>    
                    <option value="Estudo">Estudo</option>    
                </select>
                <button type='submit' > Criar tarefa</button>
            </form>

        </div>
    )
}

export default TodoForm