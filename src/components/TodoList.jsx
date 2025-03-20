import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos } = props;
  
  const tab = "Completed";
  const filterTodoList =
    tab === "Completed"
      ? todos.filter((val) => val.completed)
      : tab === "Open"
      ? todos.filter((val) => !val.completed)
      : todos;
  
  console.log(filterTodoList);
  return (
    <>
      {filterTodoList.map((_, todoIndex) => {
        return <TodoCard key={todoIndex} todos={filterTodoList} />;
      })}
    </>
  );
}
