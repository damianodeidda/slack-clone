import { SendOutlined } from '@mui/icons-material'
import React from 'react'
import './ChatInput.css'
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router'

export default function ChatInput({channelDetail}) {
    
    const [input, setInput] = useState("")

    const sendMessage = (event) => {

        event.preventDefault();

        axios.put(`http://localhost:3001/newMessage/instagram`, {messageText: input}).then((response) => {
        
        })
        setInput("")
    }

    return (
        <div className="chatInput">
            
      
            <input className="form__Input" value={input} placeholder={`Invia messaggio a ${channelDetail}`} onChange={(event) => setInput(event.target.value)} rows="2"></input>

                <button onClick={sendMessage}> <SendOutlined /></button>
                
        </div>
    )
}
