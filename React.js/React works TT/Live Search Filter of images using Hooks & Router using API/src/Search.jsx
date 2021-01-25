import React,{useState} from 'react'
import SearchResult from './SearchResult'


const Search = (props)=>{
  const[img,setImg] = useState('')
 
const inputEvent = (event)=>{ 
  return setImg(event.target.value)
}

  return(
  <>
  <div className="searchbar">
    <h1>{img}</h1>
    <input className="searchbar" type="text" placeholder="search anything.." onChange={inputEvent}/>
    {img === "" ? null : <SearchResult name={img}/>}
  </div>
  </>
  )
}

export default Search;