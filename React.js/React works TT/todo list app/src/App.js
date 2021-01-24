import React, { useState } from "react";
import "./styles.css";
import ToDoLists from "./ToDoLists";

function App() {
  //for input form
  const [inputList, setInputList] = useState();
  //for button
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  // collect all the old data as array and make a spread
  // then collect the newlyEntered data with the help of inputList

  const listOfItems = (event) => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  //delete function written
  // if the id is match with the old array index delete it else no

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
    console.log("click");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo list </h1>
          <br />
          <input
            type="text"
            placeholder="additems"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listOfItems}> + </button>
          <ol>
            {items.map((itemval, index) => {
              return (
                <ToDoLists
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
