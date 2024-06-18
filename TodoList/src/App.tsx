import { useState } from "react";
import "./App.css";
import TodoItem from "./components/Todoitem";
import { dummyData } from "./data/todo";
import AddTodoForm from "./components/AddTodoForm";
function App() {
  const [todo, setTodo] = useState(dummyData);
  function setOnCompleteChange(id: number, state: boolean) {
    setTodo((prevTodo) =>
      prevTodo.map((e) => (e.id === id ? { ...e, completed: state } : e))
    );
  }

  function addNewTodoItem(item: string) {
    setTodo((todoItems) => [
      {
        id: todoItems.length === 0 ? 1 : todoItems.length + 1,
        title: item,
        completed: false,
      },
      ...todoItems,
    ]);
  }
  const sortedTodoList = todo.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  function onTodoDelete(id: number) {
    setTodo((prevTodos) => prevTodos.filter((e) => e.id !== id));
  }
  return (
    <>
      <main className="py-10 h-screen">
        <h1 className="font-bold text-center">Your Todos</h1>

        <div className="bg-gray-50 p-5 border rounded-md scale-75">
          <div className="flex items-center justify-center">
            <AddTodoForm newTodoItem={addNewTodoItem} />
          </div>
          {sortedTodoList.map((todo) => (
            <ul
              key={todo.id}
              className="text-center flex items-center justify-center"
            >
              <li className="text-lg">
                <TodoItem
                  onCompletedChange={setOnCompleteChange}
                  todo={todo}
                  onDelete={onTodoDelete}
                />
              </li>
            </ul>
          ))}

          {todo.length === 0 && (
            <p className="font-bold text-gray-700 text-center pt-4">
              No todos yet add your todos
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
