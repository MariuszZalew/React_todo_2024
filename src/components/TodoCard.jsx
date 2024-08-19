import { useState } from "react";

export const TodoCard = ({ children, index, del, handleEdit }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  let changeInner = () => {
    setIsEditing(true);
    setTimeout(() => {
      handleEdit(children);
      del(children);
    }, 700);
  };

  let handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      del(children);
    }, 700);
  };

  return (
    <li
      className={`flex items-center p-3.5 rounded-[14px] bg-white gap-3 animate-fall ${
        isDeleting ? "animate-fallOff" : ""
      } ${isEditing ? "animate-fallOffUpwards" : ""}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <p className="flex-1 font-inter">{children}</p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => changeInner()}
          className="hover:opacity-70 cursor-pointer hover:text-green-600 transition-all duration-700 hover:scale-110"
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => handleDelete()}
          className="hover:opacity-70 cursor-pointer hover:text-red-600 transition-all duration-700 hover:scale-110"
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};
