//lets create a code which say greet us based on time and change its color while greeting
import React from "react";
import ReactDOM from "react-dom";

const say_time = new Date().getHours();

let abc;

const customStyle = {
  color:""
}

if (say_time >= 6 && say_time < 12) {
  abc = "Good morning";
  customStyle.color = "red"
} else if (say_time >= 12 && say_time < 15) {
  abc = "Good afternoon";
  customStyle.color = "green"
} else {
  abc = "Good night";
  customStyle.color = "orange"
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>{abc}</h1>
  </div>,

  document.getElementById("root")
);
