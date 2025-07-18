import { useEffect, useState } from "react";
import { dummydata } from "../data/todo";
import type { Todo } from "../Types/todo";
export default function useTodos (){
    const [todos, setTodos] = useState(()=>{
      const storedTodos = localStorage.getItem('todos');
      return storedTodos ? JSON.parse(storedTodos) : dummydata;
    });
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  const handleCompletedChange = (id: number, completed: boolean) => {
    setTodos((prev : Todo[])=>prev.map(todo=>(todo.id === id ? {...todo, completed} : todo)));
    setTodos((prev : Todo[])=>prev.sort((a: Todo,b: Todo):number=>a.completed === b.completed ? a.id - b.id : a.completed ? 1 : -1));// This sorts the todos so that completed todos appear at the end
  };
  const handleDeleteCompleted = () => {
    setTodos((prev : Todo[])=>prev.filter(todo=>todo.completed === false));
  };
  function handleAddTodo(newTodo : Todo) { // adding new task
    setTodos((prev : Todo[]) =>[newTodo,...prev]);
  }

  function handleDeleteTodo(id: number) { // delete task
    setTodos((prev : Todo[]) => prev.filter(todo => todo.id !== id));
  }
  return{
    todos,
    handleCompletedChange,
    handleDeleteCompleted,
    handleAddTodo,
    handleDeleteTodo
  }
}