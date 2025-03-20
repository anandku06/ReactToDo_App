export function TodoCard(props) {
  const { todos } = props;

  return (
    <>
    {todos.map((todo, todoIndex) => {
      return(
        <div key={todoIndex} className="card todo-item">
        <p>{todo.input}</p>
        <div className="todo-buttons">
          <button disabled={todo.completed}>
            <h6>Done</h6>
          </button>
          <button>
            <h6>Delete</h6>
          </button>
        </div>
      </div>
      )
    })}
    </>
  );
}
