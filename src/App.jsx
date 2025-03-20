import { useState } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  // const todos = [
  //   { input: "Hello! Add your first Todo!", completed: true },
  //   { input: "Get the groceries!", completed: false },
  //   { input: "Learn how to web design", completed: false },
  //   { input: "Say hi to gran gran", completed: true },
  // ];

  const [todos, setTodos] = useState([]);
  const [selectedTab, setSelectedTab] = useState("All");

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, completed: false }];
    setTodos(newTodoList);
  }

  function handleEditTodo() {}

  function handleDeleteTodo() {}

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList todos={todos} selectedTab={selectedTab} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
