import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = "netflix";

// const FavS = ()=> {

// if(favSeries === 'netflix'){
//  return  <Netflix />

// }else{
//  return <Amazon />

// }
// }

function Allcards() {
  return (
    <div className="App">
      <h2 className="headStyle">Top 4 Series that i like the most</h2>

      {/* <FavS /> */}

      {favSeries === "netflix" ? <Netflix /> : <Amazon />}
    </div>
  );
}

export default Allcards;
