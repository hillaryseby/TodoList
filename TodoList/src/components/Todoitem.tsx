

import { Todo } from "../data/todo"

export interface TodoPropsItems {
    todo : Todo
    onCompletedChange : (id: number, state : boolean) => void
    onDelete : (id :number) => void
}
 

 export default function TodoItem( {todo , onCompletedChange,onDelete} : TodoPropsItems) {
   
    function onSubmit(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        onDelete(todo.id);
    }
    return(
        <div className="size-auto flex flex-row items-center gap-2"> 
            <label  className="border rounded-md py-4 pr-4 px-4 gap-x-6 mt-5 hover:bg-red-300 cursor-pointer">
                <input type="checkbox" className="scale-125" checked = {todo.completed}
               onChange={(e) => { onCompletedChange(todo.id , e.target.checked)}}
                 />
                <span className= {todo.completed ? "line-through text-red-800" : ""}> {todo.title}
                </span>
            </label>
            <button className=" bg-red-500 hover:bg-blue-400" onClick={onSubmit}>
                Delete
            </button>
        </div>
    )
 }