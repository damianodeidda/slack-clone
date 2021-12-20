import { TrackChangesOutlined } from '@material-ui/icons'
import React from 'react'
import './SidebarChannel.css'
import { Link } from 'react-router-dom';

export default function SidebarChannel(props) {

    const path = "/rooms/" + props.title;

    return (
        <Link to={path}>
            <div className="sidebarChannel">
            
           <TrackChangesOutlined />
           <p>{props.title}{props.id}</p>
           
       </div>
       </Link>
    
    )
}
