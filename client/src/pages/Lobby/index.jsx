import React, { useEffect } from 'react'
import { CreateForm } from '../../components/CreateForm';
import './style.css'

export function Lobby({ socket, userName, roomNum }) {
    return (
        <div>
            <CreateForm socket={socket} userName={userName} roomNum={roomNum}/>
            <h3 className='roomCode'>Room code: {roomNum}</h3>
        </div>
    )
}
