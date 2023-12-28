import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./home.css"
const Home = () => {
    const [room,setRoom] =useState("");
    const navigate = useNavigate();
    const handleJoin =()=>{
            navigate(`/room/${room}`);
    }
  return (
    <div className='contaner'>
        <div className="wraper">
        <input className='roomNameInput' type="text" placeholder='Enter Room Id' value={room} onChange={(e)=>setRoom(e.target.value)} />
        <button className='JoinRoomBtn' onClick={handleJoin}>Join Room</button>
        </div>
    </div>
  )
}

export default Home