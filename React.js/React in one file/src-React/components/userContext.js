import React from 'react'

const UserContext = React.createContext('Shree Ram')
const UserProvider = UserContext.provider
const UserConsumer = UserContext.consumer

export {UserProvider, UserConsumer}
export default userContext