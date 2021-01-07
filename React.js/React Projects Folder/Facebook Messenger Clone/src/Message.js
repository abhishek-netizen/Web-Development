import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Message.css';

//using of the flipmove
const  Message = forwardRef(({ message, username },ref) => {
const isUser = username === message.username;

    return (
      <div ref={ref} className={`message ${isUser && 'message__user'}`}>
    <Card className={isUser ? "message_userCard" : "message_guestCard"}>
      <CardContent>
        <Typography
         color="textSecondary" 
         gutterBottom
         >

         {!isUser && `${message.username || 'Unkown user' }:`} {message.message}
        </Typography>
      </CardContent>
    </Card>
    </div>
    )
})

export default Message
