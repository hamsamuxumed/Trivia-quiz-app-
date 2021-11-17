import React, { useState, useEffect } from 'react';
import { Lobby } from '../../pages/index';
import io from 'socket.io-client';
import './style.css';

let socket;
const CONNECTION_URL = 'https://quiz-your-mind.herokuapp.com/'

export const Socket = () => {
    const [login, setLogin] = useState(false)
    const [room, setRoom] = useState('')
    const [userName, setUsername] = useState('')
    const [score, setScore] = useState(0)
    const [questionList, setQuestions] = useState([])
    const [endGame, setEndgame] = useState(false);
    const [startGame, setStart] = useState(false)
    const [leaderboard, setLeaderboard] = useState([])
    const [buttonShow, setButtonShow] = useState(false)
    const [createRoom, setCreateRoom] = useState(false)
    // const [admin, setAdmin] = useState(false);

    useEffect(() => {
        socket = io(CONNECTION_URL)
    }, [CONNECTION_URL]);


    useEffect(() => {
        const userData = [score, userName]
        socket.emit('track_score', userData)
    }, [score])


    const connectRoom = () => {
        setLogin(true)
        const data = [userName, score, room]
        socket.emit('all_data', data)
        socket.emit('join_room', room)
        socket.emit('username', userName)
    }

    useEffect(() => {
        socket.on('receive_q', (data) => {
            setQuestions(JSON.stringify(data))
        })
    }, [startGame])

    const genRoomId = () => {
        let roomId = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let charLen = chars.length;
        for (let i = 0; i < 6; i++) {
            roomId += chars.charAt(Math.floor(Math.random() * charLen));
        }
        setLogin(true)
        const data = [userName, score, roomId]
        socket.emit('join_room', roomId)
        socket.emit('all_data', data)
        socket.emit('username', userName)
        setRoom(roomId)
        setCreateRoom(true)
    }

    return (
        <div>
            {!login ?
                (<form className='roomJoin' id='roomJoin' action='/lobby'>
                    <h2>Enter your username and room number</h2>
                    <input placeholder='name' onChange={(e) => {
                        setUsername(e.target.value)
                    }} />
                    <input placeholder='room' onChange={(e) => {
                        setRoom(e.target.value)
                    }} />
                    <button onClick={connectRoom} disabled={!(userName.length >= 3)} >Enter</button>
                    <button onClick={genRoomId} disabled={!(userName.length >= 3)}>Create a Room</button>
                </form>) : (<Lobby socket={socket} userName={userName} roomNum={room} createR={createRoom} />)}
        </div>
    )
}