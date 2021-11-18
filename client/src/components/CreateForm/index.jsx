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
    const [category, setCategory] = useState('9')

    const handleQuNumber = (e) => {
        setQuNumber(e.target.value)
    }

    const handleQuDiffs = (e) => {
        setQuDiffs(e.target.value)
    }

    const handleCategories = (e) => {
        setCategory(e.target.value)
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
                (<form className="roomCreate" role='form' onSubmit={handleSubmit}>
                    <h2>Create your own room!</h2>
                    <label htmlFor="difficulty">Select your difficulty:</label>
                    <select name="difficulty" id="difficulty" onChange={handleQuDiffs}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <label htmlFor="category">Select your category:</label>
                    <select name="category" id="category" onChange={handleCategories}>
                        <option value='9'>General Knowledge</option>
                        <option value='11'>Films</option>
                        <option value='15'>Video Games</option>
                        <option value='18'>Computers</option>
                        <option value='21'>Sports</option>
                        <option value='22'>Geography</option>
                        <option value='23'>History</option>
                        <option value='26'>Celebrities</option>
                        <option value='27'>Animals</option>
                        <option value='29'>Comics</option>
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
                </form>) : (<Game socket={socket} userName={userName} roomNum={roomNum} roomCreated={roomCreated} questionNum={quNumber} difficulty={quDiffs} type={type} category={category} />)}
        </>
    )
}
