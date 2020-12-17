import animals, { useAnimals } from "../src/data";
import cars from "./practice";

const [honda, tesla] = cars;
const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
console.log();
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

//DESTRUCTURING OF AN ARRAY

const {
  coloursBypopularity: [hondaTopColour]
} = honda;
const {
  coloursBypopularity: [teslaTopColour]
} = tesla;

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
