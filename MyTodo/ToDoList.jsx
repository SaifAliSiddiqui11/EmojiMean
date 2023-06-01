import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="toDo_style">
        <i
          className="fa-sharp fa-solid fa-circle-xmark"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
        <li>{props.text}</li>
      </div>
    </>
  );
};
export default ToDoList;
