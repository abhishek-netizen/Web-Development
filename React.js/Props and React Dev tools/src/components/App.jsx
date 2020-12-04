import React from "react";
import Card from "./Card.jsx"
import contacts from "../contacts"
import Avatar from "./Avatar"


function App() {
  return (
    <div>
      <Avatar 
      img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIw5h5tiwbLsAn02_75EvJKNP1DFj5f3Q1iw&usqp=CAU"/>
      <h1 className="heading">My Contacts</h1>
      <Card 
      name= {contacts[0].name}
      img = {contacts[0].imgURL}
      alt = "avatar_img"
      tel = {contacts[0].phone}
      email = {contacts[0].email}
      />
      <Card 
      name= {contacts[1].name}
      img = {contacts[1].imgURL}
      alt = "avatar_img"
      tel = {contacts[1].phone}
      email = {contacts[1].email}
      />
      <Card 
      name= {contacts[2].name}
      img = {contacts[2].imgURL}
      alt = "avatar_img"
      tel = {contacts[2].phone}
      email = {contacts[2].email}
      />

    </div>

  );
}

export default App;
