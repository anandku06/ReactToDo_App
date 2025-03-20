import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos } = props;
  
  const tab = "All";
  const filterTodoList =
    tab === "Completed"
      ? todos.filter((val) => val.completed)
      : tab === "Open"
      ? todos.filter((val) => !val.completed)
      : todos;
  
  console.log(filterTodoList);
  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} todo={todo} />;
      })}
    </>
  );
}
