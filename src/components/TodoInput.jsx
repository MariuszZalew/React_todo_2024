export const TodoInput = ({ setTodos, inputP, setInputP }) => {
  function setTodosAndClear() {
    setTodos(inputP);
    setInputP("");
  }
  return (
    <header>
      <input
        value={inputP}
        onChange={(e) => {
          setInputP(e.target.value);
        }}
        placeholder="enter someting here :)"
      />
      <button onClick={setTodosAndClear}>Add</button>
    </header>
  );
};
