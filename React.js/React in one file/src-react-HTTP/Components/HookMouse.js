import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    console.log("HookMouse - 1")

    //write a func to call the mouse position 
    const logMousePosition = e => {
    console.log("logMousePosition")
    console.log('mouse event - 2')
    setX(e.clientX)
    setY(e.clientY)
    }

 ///its a HOOK: Accepts a function that contains imperative, possibly effectful code.
useEffect(()=>{
    console.log('useEffect called - 3')
    window.addEventListener('mousemove',logMousePosition)
    /////same as 'componentDidUnmount' in class component
    return () => {
   console.log('Component Unmounting code')
   window.removeEventListener('mousemove',logMousePosition)
    }
},[])

    return (
        <div>
        { console.log("returning -4") }
            Hooks X - {x} Y - {y}
        </div>
    )
    
}

export default HookMouse



//when checked in the dev tool console.
// logMousePosition
// HookMouse.js:11 mouse event - 2
// HookMouse.js:6 HookMouse - 1
// HookMouse.js:23 returning -4
// HookMouse.js:18 useEffect called - 3
// HookMouse.js:6 HookMouse - 1
// HookMouse.js:23 returning -4
// HookMouse.js:10 logMousePosition
// HookMouse.js:11 mouse event - 2
// HookMouse.js:10 logMousePosition
// HookMouse.js:11 mouse event - 2
// HookMouse.js:10 logMousePosition
// HookMouse.js:11 mouse event - 2
// HookMouse.js:10 logMousePosition
// HookMouse.js:11 mouse event - 2

