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

    const [messagesList, setMessagesList] = useState([]);
    const [channelDetail, setChannelDetail] = useState("")


    useEffect(() => {
        

        axios.get(`http://localhost:3001/channel/${roomId}`).then((response) => {
            

            setChannelDetail(response.data.name);
            setMessagesList(response.data.messages);
            

        })}, [roomId])

    
    return (

        <div className="chat">
        
        <div className="chat__messagesArea">
            <div className="chat__header">
            <TagOutlined /> <h2> {channelDetail}</h2>
            </div>

        {messagesList.map((messages) => {

            return (
    
        <Message 
        
        key={messages._id} 
        messageUser={messages.messageUser} 
        messageText={messages.messageText}
        
        />
      
            )
         } )}
        </div>
        <ChatInput />
        </div>

    )
}
