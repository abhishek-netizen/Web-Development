import React from "react"


// props are read only we cant modify our props
function TodoItem(props){

return <div onClick={()=>{
  props.onChecked(props.id);
}}>
  <li>{props.text}</li>
  </div>
}

export default TodoItem;