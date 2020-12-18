import React,{useState} from "react";
import TodoItem from "./TodoItem"


function App() {

const[inputText,setInputText] = useState("");
const[items,setItems] = useState([]);

function handleChange(event){
const newValue = event.target.value;
setInputText(newValue);
console.log(newValue)
}

//Spread operator concepts
function handleClick(){
setItems((prevItems) => {
  return [...prevItems,inputText]
})
setInputText("")
}
//

function deleteItem(id){
setItems(prevItems => {
  return prevItems.filter(
    (item, index) => {
     return index !== id;
    }

  )
});
}


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem,index)=>{
            return <TodoItem 
            key={index}
            id = {index}
            text = {todoItem}
            onChecked = {deleteItem}
            />
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
