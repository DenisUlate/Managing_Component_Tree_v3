import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [checkBoxList, setCheckBoxList] = useState([
    "Item 1",
    "Item 2",
    "Item 3"
  ]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function handleCheckBoxClick(item) {
    setCheckBoxList((prevList) => {
      return prevList.filter((listItem) => {
        return listItem !== item;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
      <div>
        <h3>Checkbox</h3>
        <ul>
          {checkBoxList.map((item) => (
            <li key={item}>
              <input
                type="checkbox"
                id={item}
                name={item}
                value={item}
                onClick={() => handleCheckBoxClick(item)}
              />
              <label htmlFor="item">{item}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
