import React from 'react'
import './Chat.css'
import Message from './Message'

export default function Chat() {
    return (
        <div className="chat">
            <div className="chat__messagesArea">
            <div className="chat__header">
            <h2> Hello</h2>
            </div>

    
        <Message messageText="ciao mondo!" messageUser="utente1" />

        </div>
        
        </div>
    )
}
