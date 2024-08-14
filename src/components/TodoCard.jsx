import React from "react";

export const TodoCard = ({ children, index, del, handleEdit }) => {
  function changeInner() {
    handleEdit(children);
    del(children);
  }
  return (
    <li className="todoItem" key={index}>
      <p>{children}</p>
      <div className="actionsContainer">
        <button onClick={() => changeInner()}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={() => del(children)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};
