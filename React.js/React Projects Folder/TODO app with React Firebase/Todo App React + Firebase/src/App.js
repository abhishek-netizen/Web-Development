import React, { useState, useEffect } from 'react';
import {Button,FormControl,Input,InputLabel} from '@material-ui/core';
import Todo from './Todo';
import db from '../src/firebase'
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([])
  const [input,setInput] = useState('')

  // when the app loads, we need to listen to the database and fetch new todos as they get addes /removed
useEffect(()=>{ //function ,dependencies
  //this code here.. fires when the app.js loads
 db.collection('todos').orderBy('timestamp').onSnapshot(snapshot => {
   console.log('Hi i am the Doc:-',snapshot.docs.map(doc => doc.data().todo))
   setTodos(snapshot.docs.map(doc => ({id:doc.id, todo:doc.data().todo})))
                                     
 })
},[input]);

  
  console.log('hi i am todos and i am outside of the func:-', todos)

  console.log('i am input from the outside of the func:-', input)

   const addTodo = (event)=> {
     event.preventDefault(); ///to prevent the page to get refresh when the button is pressed
    // console.log('i am input i will append single letter to word when i am inside addTwo func:-',input)
    // console.log('hi i am the spread of entire array todos,when i set i will push to the array',[...todos])
 
     db.collection('todos').add({
       todo:input,
       timestamp: firebase.firestore.FieldValue.serverTimestamp()
     })

    //  setTodos([...todos,input]);
     setInput(''); // To clear the input field setIt back to the empty.
     
   }


  return (
    <div>
    {/* <h2>{todos}</h2> incase if you use this it will add array withou any space egs: planetAplanetB thats the reason to use map function */}
     
    <form >

<FormControl>
  <InputLabel>Write a todo</InputLabel>
  <Input value={input} onChange={event => setInput(event.target.value)}/>
</FormControl>

 <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Here</Button>
     </form>

     <ul>
     {todos.map(todo => (
       <Todo todo={todo} name='abhish'/> 
       //value of the props is todo
       // <li>{todo}</li> // this thing is passed to the todo component as props
     ))}
    </ul>

    </div>
  );
}

export default App;