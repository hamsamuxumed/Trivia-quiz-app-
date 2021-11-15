import React, {useState, useEffect } from 'react';
import io from 'socket.io-client'

let socket;
const CONNECTION_URL = 'http://localhost:3000/'

export const Socket = () => {
    const [login, setLogin] = useState(false)
    const [room, setRoom] = useState('')
    const [userName, setUsername] = useState('')
    const [count, setCount] = useState(0)

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
        socket.emit('username', userName)
    }
    function handleClick (){
        setCount((prevCount) => prevCount + 1)
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
                </form>):(<div>
                    <button onClick={handleClick}>{count}</button>

                </div>
            )}
        </div>
    )
}