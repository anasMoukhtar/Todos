import type { Todo } from "../Types/todo";
import { Trash2 } from 'lucide-react';
interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number , completed : boolean) => void;
    onDeleteTodo: (id: number) => void; // Optional prop for delete functionality
}
function TodoItem ({ todo, onCompletedChange, onDeleteTodo }: TodoItemProps) {
  return (
    <div className="flex">
    <div key={todo.id} className='relative p-4 border mx-auto w-9/10 rounded-lg border-black-200 accent-red-500'>
      <label className='flex items-center cursor-pointer'>
        <input
          type="checkbox"
          checked={todo.completed}
          className='mr-2 cursor-pointer'
          onChange={() => onCompletedChange(todo.id, !todo.completed)}
        />
        <h2 className={`text-xl ${todo.completed ? 'line-through' : ''}`}>{todo.text}</h2>
      </label>
    </div>
    <button className="cursor-pointer " onClick={() => onDeleteTodo(todo.id)}><Trash2 /></button>

  </div>
  );
};
export default TodoItem;