import TodoItem from './components/TodoItem';
import AddTodoInput from './components/AddTodoInput';
import TodoSummary from './components/TodoSummary';
import useTodos from './hooks/useTodos';
import type { Todo } from './Types/todo';
function App() {
  const {
    todos,
    handleCompletedChange,
    handleDeleteCompleted,
    handleAddTodo,
    handleDeleteTodo
  } = useTodos();

  return (
    <main>
      <h1 className='text-3xl font-bold text-center my-8'>
        Your Todos
      </h1>
      <div className="mx-auto space-y-10 text-center">
        
        <div className='max-w-2xl p-6 mx-auto bg-slate-700 shadow-md rounded-lg space-y-5 overflow-y-auto h-[400px]'>
          <AddTodoInput todos={todos} onAddTodo={handleAddTodo} />
          {todos.map((todo: Todo) => (
            <TodoItem key={todo.id} todo={todo} onCompletedChange={handleCompletedChange} onDeleteTodo={handleDeleteTodo} />
          ))}
          {todos.length === 0 && <p className='text-center text-gray-500'>there are no tasks today</p>}
        </div>
        <TodoSummary todos={todos} onDeleteCompleted={handleDeleteCompleted} />
      </div>
    </main>
  )
}

export default App
