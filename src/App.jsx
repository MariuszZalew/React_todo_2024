import { useState } from "react";
import "./App.css";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  let orgTodos = ["some text here", "another one", "and a little bit of it"];

  const [inputP, setInputP] = useState("");

  const [todos, setTodos] = useState(orgTodos);

  function handleSetTodos(input) {
    let newTodos = [...todos, input];
    setTodos(newTodos);
  }
  function handleDeleteTodos(input) {
    let newTodos = todos.filter((e) => input !== e);
    setTodos(newTodos);
  }
  function handleEditTodos(input) {
    setInputP(input);
  }
  return (
    <main>
      <TodoInput
        inputP={inputP}
        setInputP={setInputP}
        setTodos={handleSetTodos}
      />
      {/* created a list of components in react, bug free */}
      <TodoList
        todos={todos}
        deleteItem={handleDeleteTodos}
        // setInputP={setInputP}
        handleEdit={handleEditTodos}
      />
      {/* add tailwind and replace css */}
      {/* change fonts and view */}
      {/* create react icons fontAwesome */}
      {/* use uuid for keys in react */}
    </main>
  );
}

export default App;
