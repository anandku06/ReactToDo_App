export function Header(props) {
  const { todos } = props;
  const todosLength = todos.length;
  return (
    <header>
      <h1 className="text-gradient">You Have {todosLength} open {todosLength > 1 ? "tasks" : "task"}.</h1>
    </header>
  );
}
