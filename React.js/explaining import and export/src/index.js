import React from "react"
import ReactDOM from "react-dom"
import "./styles.css";
import pi, {doublePie,tripplePie} from "./maths.js"
//import * as pi from "./maths.js"
//
ReactDOM.render(
  <div>
<h1 className="Heading">{pi}</h1>
<ul> 
<li>{doublePie()}</li>
<li>{tripplePie()}</li>
</ul>
</div>,
  document.getElementById("root"))