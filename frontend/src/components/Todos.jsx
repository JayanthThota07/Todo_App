export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>

            <button
              onClick={() => {
                fetch("http://localhost:3000/completed-todo", {
                  method: "PUT",
                  body: JSON.stringify({
                    id: todo._id,
                  }),
                  headers: {
                    "content-type": "application/json",
                  },
                });
              }}
            >
              {todo.completed ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
