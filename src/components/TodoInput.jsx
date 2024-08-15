export const TodoInput = ({ setTodos, inputP, setInputP }) => {
  function setTodosAndClear() {
    setTodos(inputP);
    setInputP("");
  }
  return (
    <header className="flex items-stretch max-w-[800px] w-full mx-auto gap-4 font-marker">
      <input
        value={inputP}
        onChange={(e) => {
          setInputP(e.target.value);
        }}
        placeholder="enter someting here :)"
        className="flex-1 w-full p-3.5 rounded-[14px]  outline-none bg-white text-xl"
      />
      <button
        onClick={setTodosAndClear}
        className="p-3.5 rounded-[14px] bg-white   hover:opacity-70 cursor-pointer text-xl"
      >
        Add
      </button>
    </header>
  );
};
