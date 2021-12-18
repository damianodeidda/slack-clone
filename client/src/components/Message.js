import { AccountBoxOutlined } from '@material-ui/icons'
import React from 'react'
import './Message.css'

export default function Message(props) {
    return (
        <div className="message">

            <AccountBoxOutlined />
        <div className="textArea">
            <h4>{props.messageUser} </h4>
            <p>{props.messageText}</p>
            </div>

            
        </div>
    )
}
