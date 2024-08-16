import { TodoCard } from "./TodoCard";

import { v4 as uuidv4 } from "uuid";

export const TodoList = ({ todos, deleteItem, handleEdit }) => {
  return (
    <ul className="flex flex-col max-w-[800px] w-full mx-auto gap-4">
      {todos.map((elem, index) => {
        return (
          <TodoCard key={uuidv4()} del={deleteItem} handleEdit={handleEdit}>
            {elem}
          </TodoCard>
        );
      })}
    </ul>
  );
};
