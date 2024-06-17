
import { Todo } from "../data/todo"

export interface TodoPropsItems {
    todo : Todo
    onCompletedChange : (id: number, state : boolean) => void
}
 

 export default function TodoItem( {todo , onCompletedChange} : TodoPropsItems) {
   
    return(
        <div className="size-auto w-80"> 
            <label  className="flex justify-center border rounded-md py-4 gap-x-6 mt-5 hover:bg-red-300 cursor-pointer">
                <input type="checkbox" className="scale-125" checked = {todo.completed}
               onChange={(e) => { onCompletedChange(todo.id , e.target.checked)}}
                 />
                <span className= {todo.completed ? "line-through text-red-800" : ""}> {todo.title}
                </span>
            </label>
        </div>
    )
 }