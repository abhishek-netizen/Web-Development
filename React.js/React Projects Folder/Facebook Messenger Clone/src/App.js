import React,{useEffect, useState} from 'react';
import './App.css';
import {FormControl,Input} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import  FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';



function App() {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([]);

  const [username, setUsername] = useState('');

    //useStte = variable in REACT
    //useEffect = snippet of code is get executed based on conditions that condition we can writ using useEffect
  
    useEffect(() => {
      db.collection('messages')
      .orderBy('timestamp','desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id:doc.id, message:doc.data()})))
      })
    },[])

     useEffect(() => {    //function,dependecies
       //run code here..
      //if its blank inside [], this code runs ONCE when the app components loads.
      setUsername(prompt("enter your name ?"))
     },[]) //condition


  //  console.log("hi its input:-",input)
  //  console.log('i am messg:-',messages)

 const sendMessage = (event) => {
   event.preventDefault();
   //all the logic to send the message goes here

   db.collection('messages').add({
     message: input,
     username: username,
     timestamp: firebase.firestore.FieldValue.serverTimestamp()
   })
 }

  return (
    <div className="App">

    <h1>Hello clever guys</h1>
    <h2>welcome {username}</h2>


  <form className="app__form">
  <FormControl className="app__formControl">
  <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)}/>
  <IconButton className="app__iconButton"disabled={!input}variant="contained" color="primary" type='submit' onClick={sendMessage}>
  <SendIcon />
  </IconButton>
  </FormControl>
  </form>

      {/* messaages themselves */}
   
       <FlipMove>     
       {
        messages.map(({id,message}) => {
          return <Message key={id} username={username} message = {message}/>
        })
      }
       </FlipMove>
    </div>
  );
}

export default App;

