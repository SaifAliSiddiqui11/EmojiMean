import React, { useState } from "react";
import "./style.css";
import ToDoList from "./ToDoList";
const App = () => {
  const [inputList, setinputList] = useState("");
  const [items, setitems] = useState([]);
  const itemEvent = (event) => {
    setinputList(event.target.value);
  };
  const printUpList = () => {
    setitems((olditems) => {
      return [...olditems, inputList];
    });
    setinputList("");
  };
  const deleteit = (id) => {
    console.log("delete");
    setitems((olditems) => {
      return olditems.filter((arrEl, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="mini_div">
          <h1>To Do List </h1>

          <input
            type="text"
            placeholder="Kindly List Ur ToDo"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={printUpList}>+</button>
          <ol>
            {items.map((itemval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteit}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
