import React from 'react';
import { Header } from '../../components';


export function Game() {
    const [count, setCount] = useState(0)
    const [questionList, setQuestions]= useState([])
    const [endGame, setEndgame] = useState(false);
    const [startGame, setStart] = useState(false);

    useEffect(() => {
        socket = io(CONNECTION_URL)
    }, [CONNECTION_URL]);

    useEffect(() => {
        socket.emit('track_score', count)
    }, [endGame])

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
    
    return (
        <div>
            <button onClick={handleClick}>{count}</button>
            <button onClick={handleEnd}>end game</button>
            <button onClick={handleStart}>start game</button>
            <h1>questions are: {questionList}</h1>
        </div>
    )
}
