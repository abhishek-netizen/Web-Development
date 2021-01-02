import React from 'react'
import './myStyles.css' 
 
function Stylesheet(props){
    let className = props.primary ? 'primary' : ''
    let fontChanger = props.primary ? 'font-xl': ''
    return (
        <div>
            <h1 className={`${className} ${fontChanger}`}>Stylesheets</h1>
        </div>
    )
}
export default Stylesheet
