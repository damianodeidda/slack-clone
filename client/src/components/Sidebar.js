import { AddOutlined, ArrowDropDown, EditOutlined } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'
import SidebarChannel from './SidebarChannel'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Sidebar() {

const [channelsList, setChannelsList] = useState([]);
const [name, setName] = useState("Nuovo canale");

useEffect(() => {

    axios.get("http://localhost:3001").then((response) => {

        setChannelsList(response.data);
    })
        
}, [])


const createChannel = () => {

    axios.post("http://localhost:3001/new", {name}).then((response) =>{

setChannelsList([...channelsList, {name}])
    })

}
    return (
        <div className="sidebar">

            <div className="sidebar__header">

                <h2>Nuova area di lavoro</h2>
                <EditOutlined />
                
            </div>

            <div className="sidebarChannels">
                <div className="sidebarChannels__header">
            
                    <ArrowDropDown />
                    <h3> Canali </h3>
                </div>

                {channelsList.map((channel) =>{
                    return (
              
                <SidebarChannel title={channel.name} />
                    )
                })
                }

                <div className="sidebarChannels__addChannel">
                <input type="text" placeholder="Aggiungi canale" onChange={(event) => {setName(event.target.value)}} />
                <button onClick={createChannel}> <AddOutlined /></button>
                </div>
            </div>      
       </div>
    )
}
