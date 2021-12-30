import { AddOutlined, ArrowDropDown, ChatBubbleOutline, EditOutlined, MenuOpenOutlined } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'
import SidebarChannel from './SidebarChannel'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

export default function Sidebar() {

const [channelsList, setChannelsList] = useState([]);
const [name, setName] = useState("Nuovo canale");

const newChannelInput = useRef(null);

const clearChannelInput = () => {

    newChannelInput.current.value = "" ;
}


const [openSidebar, setOpenSidebar] = useState(true)
const [isClosed, setIsClosed] = useState(true);
const [channelListClosed, setchannelListClosed] = useState(true)


useEffect(() => {

    axios.get("http://localhost:3001").then((response) => {

        setChannelsList(response.data);
    })
        
}, [])


const createChannel = () => {

    axios.post("http://localhost:3001/newChannel", {name}).then((response) =>{

setChannelsList([...channelsList, {name}])
    })

}


    return (
        <div className='sidebar_main'>

        <div className={openSidebar ? "sidebar" : "sidebar sidebarChannel__mobileOpen" } >

        <div className="openSidebar" onClick={() => setOpenSidebar(!openSidebar)}>

<MenuOpenOutlined />
</div>
            <div className="sidebar__header">

                <h2>Nuova area di lavoro</h2>
                <EditOutlined />
                
            </div>

   

            <div className="sidebarChannels">
                <div className="sidebarChannels__header" onClick={() => setchannelListClosed(!channelListClosed)}>
            
                    <ArrowDropDown />
                    <h3> Canali </h3>
                </div>
                
                <div className={channelListClosed ? "channelList_open" : "channelList_closed"}>

                

                {channelsList.map((channel) =>{

                    return (
              
                <SidebarChannel key={channel._id} title={channel.name}  />

                    )
                })
                }

                </div>
        
                <div className="sidebarChannels__header add_channel" onClick={() => setIsClosed(!isClosed)}>  
                <AddOutlined/> <h3>  Aggiungi canale </h3>
                  </div>
                <div className={isClosed ? "popup__newChannel_closed" : "popup__newChannel_open"}>
                    
                    <input type="text" placeholder="Aggiungi canale" onChange={(event) => {setName(event.target.value)}} ref={newChannelInput} />
                    <div onClick={() => { createChannel(); clearChannelInput();}}> <AddOutlined /> </div>
    
                </div>

                <div className="sidebarChannels__header">
            
                    <ChatBubbleOutline />
                    <h3> Messaggi diretti </h3>
                    
                </div>
        
            </div>      
       </div>

       </div>
    )
}
