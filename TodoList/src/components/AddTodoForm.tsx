import { useState } from "react";

interface AddTodoFormInterface {
  newTodoItem: (item: string) => void;
}
export default function AddTodoForm({ newTodoItem }: AddTodoFormInterface) {
  const [defaultTodo, setTodo] = useState("");
  function onSubmit($event: React.FormEvent<HTMLFormElement>) {
    $event.preventDefault();
    newTodoItem(defaultTodo);
    setTodo("");
  }
  return (
    <form className="flex flex-row" onSubmit={onSubmit}>
      <input
        value={defaultTodo}
        className="inline-block border text-black font-bold shadow grow py-2 pb-2"
        placeholder="What would you like to do"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="bg-blue-400 hover:bg-yellow-300 py-2 pb-2 px-10 pr-10 mx-2">
        Add
      </button>
    </form>
  );
}
