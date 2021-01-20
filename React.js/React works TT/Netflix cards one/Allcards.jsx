import React from "react";
import Carders from "./Carders";

function Allcards() {
  return (


    <div className="App">
      
    <h2 className="headStyle">Top 4 Series that i like the most</h2>
      <Carders
        showName="Dark"
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuMtWm74ym7llPEQtY1JV8XOJUOED3s9aTw&usqp=CAU"
        zoner="Scipy"
        watchLink="https://www.netflix.com/in/title/80100172"
      />

      <Carders
        showName="Narcos"
        imgSrc="https://tvline.com/wp-content/uploads/2014/12/sons-of-anarchy-series-finale1.jpg"
        zoner="Mafia,Drug"
        watchLink="https://www.netflix.com/in/title/70143844?source=35"
      />

      <Carders
        showName="The last kingdom"
        imgSrc="https://images-na.ssl-images-amazon.com/images/I/91UCy8IPuUL._RI_.jpg"
        zoner="Action,History"
        watchLink="https://www.netflix.com/in/title/80074249"
      />

      <Carders
        showName="Sons of Anarchy"
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOhyfhQ23IomxxOfOylq6MfWU7Lfpo56D4A&usqp=CAU"
        zoner="Drugs,Mafia"
        watchLink="https://www.netflix.com/in/title/70143844"
      />
    </div>
  );
}

export default Allcards;
