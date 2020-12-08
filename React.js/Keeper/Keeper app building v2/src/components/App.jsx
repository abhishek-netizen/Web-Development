import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../components/notes"







function App() {
  return (
    <div>
      <Header />
      {notes.map((noteItem)=>{
return <Note 
key = {noteItem.key}
title = {noteItem.title}
content = {noteItem.content}
/>
})}
      <Footer />
      <Note 
      
      title = "Do you know what is DBSCAN stands for?" content = "Density Based Spacial Clustering Application with Noise."
      
      
      />
      
    </div>
  );
}
export default App;
