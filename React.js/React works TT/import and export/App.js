import React from "react";
import "./styles.css";
import AppleCase, {grapes,banana,pumpKin} from './Heading';


export default function App() {
  return (
    <div>
<h1> {AppleCase()} </h1>
    <ol>
        <li>{grapes}</li>
        <li>{banana}</li>
        <li>{pumpKin()}</li>
    </ol>
    </div>
  );
}
