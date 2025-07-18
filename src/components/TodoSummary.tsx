import type { Todo } from "../Types/todo"
interface TodoSummaryProps{
    todos : Todo[]
    onDeleteCompleted: () => void
}
export default function TodoSummary ({todos, onDeleteCompleted }: TodoSummaryProps){
    return(
        <>
        <div className="flex flex-col items-center justify-between max-w-2xl p-6 mx-auto space-y-5">
            {todos.filter(todo => todo.completed).length} / {todos.length} completed
            
            {todos.some(todo => todo.completed) && (<button className="text-sm text-red-500 hover:text-red-400 cursor-pointer " onClick={onDeleteCompleted}>Delete completed tasks</button>)}
        </div>
        </>
    )
}