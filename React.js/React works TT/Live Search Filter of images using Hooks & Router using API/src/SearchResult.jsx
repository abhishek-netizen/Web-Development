import React from 'react';


const SearchResult = (props)=>{ 

  const img = `https://source.unsplash.com/700x350/?${props.name}`
 
return(
  <>
  <img src={img} alt="RandomImage"/>
  </>
)
}

export default SearchResult;