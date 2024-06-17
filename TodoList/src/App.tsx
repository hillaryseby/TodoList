import { useState } from "react";
import "./App.css";
import TodoItem from "./components/Todoitem";
import { dummyData } from "./data/todo";
import AddTodoForm from "./components/AddTodoForm";
function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [todo, setTodo] = useState(dummyData);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function setOnCompleteChange(id: number, state: boolean) {
    setTodo((prevTodo) =>
      prevTodo.map((todos) => {
        if (todos.id === id) {
          todo.splice(todo.indexOf(todos),1)
        }
        return { ...todos };
      })
    );
  }

  function addNewTodoItem(item: string) {
    setTodo((todoItems) => [
      {
        id: todoItems.length ===0 ? 1 : todoItems.length+1,
        title: item,
        completed: false,
      },
      ...todoItems,
    ]);
  }

  return (
    <>
      <main className="py-10 h-screen">
        <h1 className="font-bold text-center">Your Todos</h1>

        <div className="bg-gray-50 p-5 border rounded-md scale-75">
          <div className="flex items-center justify-center">
            <AddTodoForm newTodoItem={addNewTodoItem} />
          </div>
          {todo.map((todo) => (
            <ul
              key={todo.id}
              className="text-center flex items-center justify-center"
            >
              <li className="text-lg">
                <TodoItem onCompletedChange={setOnCompleteChange} todo={todo} />
              </li>
            </ul>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
