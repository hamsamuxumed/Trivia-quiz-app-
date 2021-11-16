import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './style.css';

let socket;
const CONNECTION_URL = 'http://localhost:3000/'

export const Socket = () => {
    const [login, setLogin] = useState(false)
    const [room, setRoom] = useState('')
    const [userName, setUsername] = useState('')
    const [score, setScore] = useState(0)
    const [questionList, setQuestions] = useState([])
    const [endGame, setEndgame] = useState(false);
    const [startGame, setStart] = useState(false)
    const [leaderboard, setLeaderboard] = useState([])

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

    //socket.emit('join_room', room, message => {
    //     displayMessage(message) //set state
    // })

    useEffect(() => {
        console.log('in useEffect')
        socket.on('receive_q', (data) => {
            console.log('questions' + JSON.stringify(data))
            setQuestions(JSON.stringify(data))
        })
    }, [startGame])

    useEffect(() => {

        let leaderboard_r = []
        socket.on("receive_room_leaderboard", (data) => {
            data.map((r) => { leaderboard_r.push(r.score) })
            setLeaderboard(leaderboard_r)
        })
    }, [endGame])



    function handleClick() {
        setScore((prevCount) => prevCount + 1)
    }

    function handleEnd() {
        socket.emit('endgame', room)
        setEndgame((prevEnd) => !prevEnd)
    }

    function handleStart() {
        socket.emit('start_game', room)
        setStart((prevEnd) => !prevEnd)
    }
    return (
        <div>
            {!login ? (
                <form className='roomJoin' id='roomJoin'>
                    <h2>Enter your username and room number</h2>
                    <input placeholder='name' onChange={(e) => {
                        setUsername(e.target.value)
                    }} />

                    <input placeholder='room' onChange={(e) => {
                        setRoom(e.target.value)
                    }} />
                    <button onClick={connectRoom}>Enter</button>
                </form>) : (<div>
                    <button onClick={handleStart}>start game</button>
                    <button onClick={handleEnd}>end game</button>
                    <h1>questions is : {questionList}</h1>
                    <h1 id="leaderboard">your leaderboard{leaderboard}</h1>
                    {!endGame ? <button onClick={handleClick}>{score}</button> : <h1 > Game has ended</h1>}

                </div>
            )}
        </div>
    )
}