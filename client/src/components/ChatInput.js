import { AlternateEmailOutlined, AttachFileOutlined, EmojiEmotionsOutlined, FormatBoldOutlined, FormatItalicOutlined, LinkRounded, SendOutlined } from '@mui/icons-material'
import React from 'react'
import './ChatInput.css'

export default function ChatInput() {
    return (
        <div className="chatInput">
            

            <textarea placeholder="Invia un messaggio alla chat" rows="2"></textarea>



        <div className="chatInput__buttons">
            <div className="chatInput__decorators">

                <FormatBoldOutlined />
                <FormatItalicOutlined />
                <LinkRounded />
            </div>

            <div className="chatInput__actions">

                <AlternateEmailOutlined />
                <EmojiEmotionsOutlined />
                <AttachFileOutlined />
                <button><SendOutlined /></button>
            </div>
            </div>
            
        </div>
    )
}
