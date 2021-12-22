import React from 'react'
import './SidebarChannel.css'
import { Link } from 'react-router-dom';
import { TagOutlined } from '@mui/icons-material';

export default function SidebarChannel(props) {

    const path = "/rooms/" + props.title;

    return (
        <Link to={path}>
            <div className="sidebarChannel">
            
            <TagOutlined />
           <p>{props.title}{props.id}</p>
           
       </div>
       </Link>
    
    )
}
