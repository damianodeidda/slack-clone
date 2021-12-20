import React, { useEffect } from 'react'
import './Chat.css'
import ChatInput from './ChatInput'
import Message from './Message'
import { useParams } from 'react-router'
import { TagOutlined } from '@mui/icons-material'
import { useState } from 'react'
import axios from 'axios'


export default function Chat() {
    
    let {roomId} = useParams();

    const [channelDetails, setChannelDetails] = useState(null);
    const [messagesList, setMessagesList] = useState([]);

     
useEffect(() => {
    if (roomId)
   
    axios.get("http://localhost:3001").then((response) => {

        setChannelDetails(response.data[0].name)
        setMessagesList(response.data[0].messages) 
    })

}, [])

console.log(messagesList)

    return (

        <div className="chat">
        
        <div className="chat__messagesArea">
            <div className="chat__header">
            <TagOutlined /> <h2> {roomId}</h2>
            </div>

        {messagesList.map((message) => {

            return (
    
        <Message 
        
        key={message._id} 
        messageUser={message.messageText} 
        messageText={message.messageUser}
        
        />
      
            )
         } )}
        </div>
        <ChatInput />
        </div>

    )
}
