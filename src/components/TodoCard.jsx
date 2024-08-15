import React from "react";

export const TodoCard = ({ children, index, del, handleEdit }) => {
  function changeInner() {
    handleEdit(children);
    del(children);
  }
  return (
    <li
      className="flex items-center p-3.5 rounded-[14px] bg-white gap-3"
      key={index}
    >
      <p className="flex-1 font-inter">{children}</p>
      <div className="flex hitems-center gap-3">
        <button
          onClick={() => changeInner()}
          className="hover:opacity-70 cursor-pointer"
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => del(children)}
          className="hover:opacity-70 cursor-pointer"
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};
