import React from 'react'

///INLINE example
const heading = {
    fontSize:'100px',
    color:'red'
}

function Inline() {
    return (
        <div>
        {/* <h1 className={styles.success}>Success</h1>   which doesnot work in children because its a css style module */}
            <h1 style={heading}>Inline</h1>
            <h1 className='error'>Error</h1>
        </div>
    )
}

export default Inline
