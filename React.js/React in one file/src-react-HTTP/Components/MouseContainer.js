import React,{useState} from 'react'
import HookMouse from './HookMouse'
function MouseContainer() {

 const [display, setdisplay] = useState(true)


    return (
        <div>
        <button onClick={()=>setdisplay(!display)}>Toggle display</button>
         { display && <HookMouse />}   
        </div>
    )
}

export default MouseContainer
