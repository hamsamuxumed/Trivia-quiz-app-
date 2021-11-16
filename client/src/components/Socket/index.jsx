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
    const [buttonShow, setButtonShow] = useState(false)
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
        let leaderboard_room = []
        socket.on('send_score', (data) => {
            data.map((r) => { leaderboard_room.push(r.score) })
            setLeaderboard(leaderboard_room)
            //get names to room leaderboard

        })

    }, [endGame])



    function handleClick() {
        setScore((prevCount) => prevCount + 1)
    }

    function handleEnd() {
        setEndgame((prevEnd) => !prevEnd)
        const data = [room, endGame]
        socket.emit('endgame', data)
        socket.on('hide_button', (data) => {

            setButtonShow(data)
        })
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
                    {!buttonShow ?
                        <div>
                            <button onClick={handleClick}>{score}</button> <button onClick={handleEnd} >end game</button>
                        </div>
                        : null}


                    <h1>questions is : {questionList}</h1>
                    <h1 id="leaderboard">your leaderboard{leaderboard}</h1>



                </div>
            )}
        </div>
    )
}