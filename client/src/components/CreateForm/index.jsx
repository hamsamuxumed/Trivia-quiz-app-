import React from 'react';
import { useState } from 'react';
import { Game } from '../../pages/index';
import './style.css';


export function CreateForm({ socket, userName, roomNum, roomCreated }) {
    const [gameState, setGameState] = useState(false);
    console.log('gamestate ' + gameState)
    const [quNumber, setQuNumber] = useState(10);
    const [quDiffs, setQuDiffs] = useState('easy');
    const [type, setType] = useState('multiple');

    const handleQuNumber = (e) => {
        setQuNumber(e.target.value)

    }

    const handleQuDiffs = (e) => {
        setQuDiffs(e.target.value)
    }
    const handleType = (e) => {
        setType(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setGameState(true);
    }


    return (
        <>
            {!gameState ?
                (<form className="roomCreate" onSubmit={handleSubmit}>
                    <h2>Create your own room!</h2>
                    <label htmlFor="difficulty">Select your difficulty:</label>
                    <select name="difficulty" id="difficulty" onChange={handleQuDiffs}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <label htmlFor="quType">Select what type of questions you would like:</label>
                    <select name="quType" id="quType" onChange={handleType}>
                        <option value="multiple">Multiple Choice</option>
                        <option value="boolean">True or False</option>
                    </select>
                    <label htmlFor="quNumber">How many questions?</label>
                    <input value={quNumber} type="range" name="quNumber" id="quNumber" min="5" max="20" step="5" onChange={handleQuNumber} />
                    <span>{quNumber}</span>
                    <input type="submit" value="Create" />
                </form>) : (<Game socket={socket} userName={userName} roomNum={roomNum} roomCreated={roomCreated} questionNum={quNumber} difficulty={quDiffs} type={type} />)}
        </>
    )
}
