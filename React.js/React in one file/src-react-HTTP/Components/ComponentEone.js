import React,{useContext} from 'react'
// import ComponentFone from './ComponentFone'
import {UserContext, ChannelContext} from '../App'

function ComponentEone() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
           {channel}-{user}
        </div>
    )
}

export default ComponentEone