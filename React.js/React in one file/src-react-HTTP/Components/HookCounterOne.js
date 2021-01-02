import React,{useState,useEffect} from 'react'

function HookCounterOne() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(() => {
        console.log('useEffect hooks - Updating document title')
        document.title = `you clicked ${count} times`
    }, [count]) ////////////INORDER TO CONDITIONALLY RENDER EFFECT USE SECOND PARAMETER TO USE EFFECT SEC PARAMTER IS A AN ARRAY OF VALUES THE EFFECT DEPENDS ON, IF THE VALUES WONT CHANGE BETWEEN RENDERS THE EFFECT IS SIMPLY NOT RUN.



    return (
        <div>
            <input type='text' value={name} onChange={e=> setName(e.target.value)} />
            <button onClick={() => setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne
