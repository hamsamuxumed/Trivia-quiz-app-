import React, { useEffect } from 'react'
import { CreateForm } from '../../components/CreateForm';
import { Game } from '..';
import './style.css'

export function Lobby({ socket, userName, roomNum, createR }) {
    let roomCreated = createR
    console.log(roomCreated)
    return (
        <div role='document'>
            {createR ?
                <div>
                    <CreateForm socket={socket} userName={userName} roomNum={roomNum} roomCreated={createR} /> <h3 className='roomCode'>Room code: {roomNum}</h3>
                </div>
                : <Game socket={socket} userName={userName} roomNum={roomNum} roomCreated={createR} />}
        </div>
    )
}
