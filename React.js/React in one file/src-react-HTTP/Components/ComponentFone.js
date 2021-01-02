import React from 'react'
import {UserContext,ChannelContext} from '../App'

function ComponentFone() {
    return (
        <div>
        <UserContext.Consumer>
            {
                user => {
                    return(
                        <ChannelContext.Consumer>
                        {
                           channel => {
                               return <div> user context value is :{user}, channel context value is : {channel}</div>
                           }
                        }
                        </ChannelContext.Consumer>
                    ) 
                }
            }
        </UserContext.Consumer>
        </div>
    )
}
export default ComponentFone