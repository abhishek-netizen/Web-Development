import React,{useState} from 'react'

function HookCounterTwo() {

    const initialCount=0
    const[count,setCount] = useState(initialCount)
    
    const clickHandler = ()=>{
        for(let i=0;i<5;i++){                                   ////incrementBy5
            setCount(prevCount => prevCount+1)      
        }
    }

    return (
        <div>
        <h2>{count}</h2>
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(prevCount => prevCount+1)}>Increment</button>
        <button onClick={()=>setCount(prevCount => prevCount-1)}>Decrement</button>
        <button onClick={clickHandler}>Increment-By-5</button>
        </div>
    )
}

export default HookCounterTwo
