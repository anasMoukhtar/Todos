import React, { useState } from 'react';
import type { Todo } from '../Types/todo';
interface AddTodoInputProps {
    todos:Todo[],
    onAddTodo: (todo: Todo) => void;
}
export default function AddTodoInput({todos, onAddTodo}: AddTodoInputProps) {
    const [input , setInput] = useState('');
    const handlesubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(input.trim() === '') return;
        onAddTodo({
            id: todos.length + 1,
            text: input,
            completed: false
        });
        setInput('');
    }
    return(
        <form onSubmit={(e)=>handlesubmit(e)} className=' flex p-4 mx-auto w-9/10 rounded-lg border-black-200'>
            <input
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder='Add a new todo'
            className='border p-2 rounded-s-2xl h-10 grow outline-0'
            />
            <button type="submit" className='bg-slate-900 text-white p-2 rounded-e-2xl cursor-pointer hover:bg-slate-800'>Add</button>
        </form>
    )
}