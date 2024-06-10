

import './App.css'
import TodoItem from './components/Todoitem'
import { dummyData } from './data/todo';

function setOnCompleteChange(id : number , state : boolean) {
 console.log(id , state)
}
function App() {

  return (
    <>
   
    <main className='py-10 h-screen'>

      <h1 className='font-bold text-center'>
        Your Todos
      </h1>

      <div className='bg-gray-50'>
       {dummyData.map((todo) => 
       <ul key={todo.id} className='text-center'>
        <li className='text-lg'>
          <TodoItem
          onCompletedChange={setOnCompleteChange} 
          todo={todo}/>
        </li>
       </ul>)}
      </div>
    </main>
    </>
  )
}

export default App
