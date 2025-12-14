import React from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = React.useState([]);

  fetch('http://localhost:3000/todo')
    .then(async function (res){
      const json = await res.json();
      setTodos(json.data);
    })
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
