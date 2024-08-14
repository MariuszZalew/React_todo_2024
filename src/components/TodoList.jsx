import { TodoCard } from "./TodoCard";

export const TodoList = ({ todos, deleteItem, handleEdit }) => {
  return (
    <ul className="main">
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
