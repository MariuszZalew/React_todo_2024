import { TodoCard } from "./TodoCard";

export const TodoList = ({ todos, deleteItem, handleEdit }) => {
  return (
    <ul className="flex flex-col max-w-[800px] w-full mx-auto gap-4">
      {todos.map((elem, index) => {
        return (
          <TodoCard key={index} del={deleteItem} handleEdit={handleEdit}>
            {elem}
          </TodoCard>
        );
      })}
    </ul>
  );
};
