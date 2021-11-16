import React, { useState, useEffect } from 'react';
import { Header } from '../../components';
import { RoomLeaderboard } from '../../components/index';
import io from 'socket.io-client';
import './style.css';

export function Game({socket, userName, roomNum }) {
    let room = roomNum;
    //const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    const [questionList, setQuestions] = useState([]);
    const [endGame, setEndgame] = useState(false);
    const [startGame, setStart] = useState(false);
    const [leaderboard, setLeaderboard] = useState([]);
    //const [buttonShow, setButtonShow] = useState(false);
    // const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const userData = [score, userName]
        socket.emit('track_score', userData)
    }, [score])

    const hideButton = (buttonId) => {
        let button = document.getElementById(buttonId);
        button.style.display = 'none';
    }

    const showButton = (buttonId) => {
        let button = document.getElementById(buttonId);
        button.style.display = 'block';
    }
    
    useEffect(() => {
        console.log('in useEffect')
        socket.on('receive_q', (data) => {
            console.log('questions' + JSON.stringify(data))
            setQuestions(JSON.stringify(data))
            hideButton('startButton');
            showButton('endButton');
        })
    }, [startGame])

    useEffect(() => {
        let leaderboard_room = []
        socket.on('send_score', (data) => {
            data.map((r) => { leaderboard_room.push(r) })
            setLeaderboard(leaderboard_room)
            console.log(leaderboard_room)
            //get names to room leaderboard
            hideButton('endButton');
            hideButton('scoreItem');
        })

    }, [endGame])

    function handleClick() {
        setScore((prevCount) => prevCount + 1)
    }
    
    function handleEnd() {
        setEndgame((prevEnd) => !prevEnd)
        const data = [room, endGame]
        socket.emit('endgame', data)
        //setQuestions([]);
    }

    function handleStart() {
        socket.emit('start_game', room)
        setStart((prevEnd) => !prevEnd)
    }
    
    const getUserScores = () => {
        const scores = leaderboard.map((u, i) => 
        <li key={i}>
            <span>{u.username}</span>
            <span>{u.score}</span>
        </li>
        )
        return scores;
    }

    return (
        <div>
            <button id='scoreItem' onClick={handleClick}>{score}</button>
            <button id='endButton' onClick={handleEnd}>end game</button>
            <button id='startButton' onClick={handleStart}>start game</button>
            <h1>questions are: {questionList}</h1>
            <ul>
                {getUserScores()}
            </ul>
        </div>
    )
}
