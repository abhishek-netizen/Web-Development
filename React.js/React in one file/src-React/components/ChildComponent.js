import React from 'react'
///////////////////PASSING METHOD AS PROP ///////////////////
function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet parent</button> */}
            <button onClick={()=> props.greetHandler('Child')}>clicker</button>
        </div>
    )
}

export default ChildComponent



