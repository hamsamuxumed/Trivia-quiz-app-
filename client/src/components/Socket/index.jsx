import React, {useState, useEffect } from 'react';
import io from 'socket.io-client'

let socket;
const CONNECTION_URL = 'http://localhost:3000/'

export const Socket = () => {
    const [login, setLogin] = useState(false)
    const [room, setRoom] = useState('')
    const [userName, setUsername] = useState('')
    const [count, setCount] = useState(0)
    const [questionList, setQuestions]= useState([])
    const [endGame, setEndgame] = useState(false);
    const [startGame, setStart] = useState(false)

    useEffect(() => {
        socket = io(CONNECTION_URL)
    }, [CONNECTION_URL]);

    
    useEffect(() => {
        socket.emit('track_score', count)
    }, [endGame])

    const connectRoom = () => {
        setLogin(true)
        socket.emit('join_room', room)
        socket.emit('username', userName)
    }

    useEffect(() => {
        console.log('in useEffect')
        socket.on('receive_q', (data) => {
            console.log('questions'+ JSON.stringify(data))
            setQuestions(JSON.stringify(data))
        })
    },[startGame])

    function handleClick (){
        setCount((prevCount) => prevCount + 1)
    }

    function handleEnd (){
        setEndgame((prevEnd) => !prevEnd)
    }

    function handleStart(){
        socket.emit('start_game', room)
        setStart((prevEnd) => !prevEnd)
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
                    <button onClick={handleEnd}>end game</button>
                    <button onClick={handleStart}>start game</button>
                    <h1>questions is : {questionList}</h1>
                </div>
            )}
        </div>
    )
}