import { Todo } from "../data/todo"

export interface TodoPropsItems {
    todo : Todo
    onCompletedChange : (id: number, state : boolean) => void
}
 

 export default function TodoItem( todo : TodoPropsItems, {onCompletedChange} : TodoPropsItems) {
    return(
        <div> 
            <label  className="flex justify-center border py-4 gap-x-6 mt-5 hover:bg-red-300 cursor-pointer">
                <input type="checkbox" className="scale-125" checked = {todo.todo.completed}
                onChange = {(e) => onCompletedChange(todo.todo.id , e.target.checked)}
                 />
                <span className= {todo.todo.completed ? "line-through text-red-800" : ""}> {todo.todo.title}</span>
            </label>
            
        </div>
    )
 }