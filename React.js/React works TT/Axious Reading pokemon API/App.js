import React,{useEffect, useState} from 'react';
import axios from 'axios';

import "./styles.css";

export default function App() {
 
const [num, setNum] = useState()
const [name, setName] = useState()
const [moves, setMove] = useState()
const [imgs,setImgs] = useState()

useEffect(()=>{

  async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      console.log(res.data.name)
      setName(res.data.name)
      setMove(res.data.moves.length)
      setImgs(res.data.sprites.back_default)
    }
  
  getData()
});

const changeHandler = (event)=>{
   setNum(event.target.value)

}

  return (
    <div className="App">
      <h1>you selected :  {num}</h1>
      <h1>you choose: {name}</h1>
      <img src ={imgs} alt=""/>
      <h1>you choose: {moves}</h1>
      <select value={num} onChange={changeHandler}> 
          <option value='1'>1</option>  
          <option value='25'>25</option> 
          <option value='3'>3</option> 
          <option value='4'>4</option> 
          <option value='5'>5</option> 
      </select>      
    </div>
  );
}
