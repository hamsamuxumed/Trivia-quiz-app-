import React, {useState, useEffect } from 'react';
import io from 'socket.io-client'

let socket;
const CONNECTION_URL = 'http://localhost:3000/'

export const Socket = () => {
    const [login, setLogin] = useState(false)
    const [room, setRoom] = useState('')
    const [userName, setUsername] = useState('')

    useEffect(() => {
        socket = io(CONNECTION_URL, {  
            withCredentials: true,  
            extraHeaders: {    
                "my-custom-header": "abcd"  
            }
        })
    }, [CONNECTION_URL]);

    const connectRoom = () => {
        setLogin(true)
        socket.emit('join_room', room)
    }
    return(
        <div>
            {!login ? (
                <form id='roomJoin'>
                    <input placeholder='name' onChange={(e) => {
                        setUsername(e.target.value)
                    }}/>
                    <input placeholder='room' onChange={(e) => {
                        setRoom(e.target.value)
                    }}/>
                    <button onClick={connectRoom}>enter quiz</button>
                </form>):(<h1>you are in</h1>
            )}
        </div>
    )
}