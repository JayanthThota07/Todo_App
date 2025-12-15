import React from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(()=>{
    async function fecthData(){
   const res = await fetch('http://localhost:3000/todo')
   const json = await res.json();
   setTodos(json.data);
   }
    fecthData();

  },[])
   
    
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
