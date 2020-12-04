import React from "react"

function Detail (props){
  return(
    <div>
    <p className="info">{props.paragraph}</p>
    <p className="info">{props.paragraph_mail}</p>
   </div>

  )
}

export default Detail;