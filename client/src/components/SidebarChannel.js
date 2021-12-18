import { TrackChangesOutlined } from '@material-ui/icons'
import React from 'react'
import './SidebarChannel.css'

export default function SidebarChannel(props) {
    return (
            <div className="sidebarChannel">
            
           <TrackChangesOutlined />
           <p>{props.title}{props.id}</p>
           
       </div>
    
    )
}
