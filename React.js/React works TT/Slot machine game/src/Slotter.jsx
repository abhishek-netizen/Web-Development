import React from 'react'

const SlotM = (props) => { 

  if( (props.x===props.y) && (props.y===props.z) ){
  return(
     <>
     <div>
       <h1> {props.x} {props.y} {props.z}</h1>
       <h3> This is matching </h3>
       
       </div>
     </>
  )
  }else{
    return(
    <>
    <h1> {props.x} {props.y} {props.z} </h1>
     <h3 >This is not matching</h3> 
   </>
   )
  }
  }

  export default SlotM;