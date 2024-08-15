import { useEffect, useState } from "react";
import "./App.css";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  let orgTodos = ["some text here", "another one", "and a little bit of it"];

  const [inputP, setInputP] = useState("");

  const [todos, setTodos] = useState(orgTodos);

  function handleSetTodos(input) {
    let newTodos = [...todos, input];
    persistData(newTodos);
    setTodos(newTodos);
  }
  function handleDeleteTodos(input) {
    let newTodos = todos.filter((e) => input !== e);
    persistData(newTodos);
    setTodos(newTodos);
  }
  function handleEditTodos(input) {
    setInputP(input);
  }

  function persistData(newList) {
    localStorage.setItem(
      "todos",
      JSON.stringify({
        todos: newList,
      })
    );
  }
  useEffect(() => {
    const localTodos = localStorage?.getItem("todos");
    if (localTodos) {
      const parsedTodos = JSON.parse(localTodos)?.todos;
      if (parsedTodos) {
        setTodos(parsedTodos);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col p-4 bg-slate-200 gap-4 text-black">
      <TodoInput
        inputP={inputP}
        setInputP={setInputP}
        setTodos={handleSetTodos}
      />
      {/* created a list of components in react, bug free */}
      {/* added local storage capacity, fixed a bug in a meantime */}
      <TodoList
        todos={todos}
        deleteItem={handleDeleteTodos}
        handleEdit={handleEditTodos}
      />
      {/* add tailwind and replace css */}
      {/* change fonts and view */}
      {/* create react icons fontAwesome */}
      {/* use uuid for keys in react */}
      {/* disable on empty */}
      {/* refactor useEffect */}
    </div>
  );
}

export default App;
