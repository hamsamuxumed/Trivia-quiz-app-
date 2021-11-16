import React, { useState, useEffect } from 'react';
import { RoomButton } from '../../components/RoomButton';
import { Lobby } from '../../pages/index';
import io from 'socket.io-client';
import './style.css';

let socket;
const CONNECTION_URL = 'http://localhost:3000/'

export const Socket = () => {
    const [login, setLogin] = useState(false)
    const [room, setRoom] = useState('')
    const [userName, setUsername] = useState('')

    useEffect(() => {
        socket = io(CONNECTION_URL)
    }, [CONNECTION_URL]);
    
    const connectRoom = () => {
        setLogin(true)
        socket.emit('join_room', room)
        socket.emit('username', userName)
    }

    const genRoomId = () => {
        let roomId ='';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let charLen = chars.length;
        for(let i = 0; i < 6; i++ ){
            roomId += chars.charAt(Math.floor(Math.random() * charLen));
        }
        setLogin(true)
        console.log(roomId)
        socket.emit('join_room', roomId)
        socket.emit('username', userName)
        setRoom(roomId)
    }
    
    return(
        <div>
            {!login ? 
            (<form className ='roomJoin' id='roomJoin' action='/lobby'>
                <h2>Enter your username and room number</h2>
                <input placeholder='name' onChange={(e) => {
                    setUsername(e.target.value)
                }}/>
                <input placeholder='room' onChange={(e) => {
                    setRoom(e.target.value)
                }}/>
                <button onClick={connectRoom} disabled={!(userName.length >= 3)} >Enter</button>
                <RoomButton onClick={genRoomId} userName={userName} room={room}/>
            </form>):(<Lobby roomNum={room}/>)}
        </div>
    )
}