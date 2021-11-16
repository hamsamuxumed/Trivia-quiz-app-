import React, { useState, useEffect } from 'react';
import { Header } from '../../components';
import io from 'socket.io-client';

export function Game({socket, userName, roomNum }) {
    let room = roomNum;
    //const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    const [questionList, setQuestions] = useState([]);
    const [endGame, setEndgame] = useState(false);
    const [startGame, setStart] = useState(false);

    useEffect(() => {
        const userData = [score, userName]
        console.log(`score ${score}, userName ${userName}, socket ${socket}`)
        socket.emit('track_score', userData)
    }, [score])
    
    useEffect(() => {
        console.log('in useEffect')
        socket.on('receive_q', (data) => {
            console.log('questions' + JSON.stringify(data))
            setQuestions(JSON.stringify(data))
        })
    }, [startGame])

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
            <button onClick={handleClick}>{score}</button>
            <button onClick={handleEnd}>end game</button>
            <button onClick={handleStart}>start game</button>
            <h1>questions are: {questionList}</h1>
        </div>
    )
}
