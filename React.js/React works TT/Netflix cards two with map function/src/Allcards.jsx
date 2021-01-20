import React from "react";
import Carders from "./Carders";
import Sdata from './Sdata';



function Allcards() {
  return (

    <div className="App">
      
    <h2 className="headStyle">Top 4 Series that i like the most</h2>
   
{Sdata.map((cdata) => { 
  return(
    <Carders
    showName = {cdata.showNames}
    imgSrc = {cdata.imgSrcs}
    zoner = {cdata.zoners}
    watchLink = {cdata.watchLinks}
  />
 )
})}
    
    </div>
  );
}

export default Allcards;
