import './App.css';
import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

function App() {

  return <div className="app">

    <Header />
    <Sidebar />
    <Chat />

   </div>
   ;
}

export default App;
