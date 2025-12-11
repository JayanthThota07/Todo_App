import React from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = React.useState([]);
  return (
    <div>
      <CreateTodo />
      <Todos todo={[
        title: "Sample Todo",
        description: "This is a sample todo description",
        completed: false
      ]} />
    </div>
  );
}

export default App;
