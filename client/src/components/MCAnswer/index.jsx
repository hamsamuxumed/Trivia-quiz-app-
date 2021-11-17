import React, { useEffect, useState } from 'react';

export const MCAnswer = ({ socket, data }) => {
    const [questions, setQuestions] = useState([])
    const [shuffleAnswers, setShuffleAnswers] = useState([])
    const [questionCount, setQuestionCount] = useState(0)
    const [userAnswer, setUserAnswer] = useState('')
    const [correctAnswer, setCorrectAnswer]= useState('')
    const [score, setScore] = useState(0)
    

    useEffect(() => {
        
        let questionAndAnswer;
        let mixedAnswers;
        let allAnswers = [];
        let allQuestions = [];
        let AllCorrectAnswer = []
        
        data.map((q) => {
            
            questionAndAnswer = {
                question: q.question,
                corr: q.correct_answer,
                inCorr: q.incorrect_answers
            }
            mixedAnswers = [questionAndAnswer.corr, ...questionAndAnswer.inCorr].sort(() => Math.random() - 0.5)
            AllCorrectAnswer.push(questionAndAnswer.corr)
            allAnswers.push(mixedAnswers)
            allQuestions.push(questionAndAnswer.question)
            
        })
        setShuffleAnswers(allAnswers)
        setQuestions(allQuestions)
        setCorrectAnswer(AllCorrectAnswer)
        
    }, [data])
    
    const nextQuestion = () => {
        setQuestionCount((prevState) => prevState + 1)
    }
    
    const handleAnswer = (e) => {
        setUserAnswer(e.target.value)
    }
    
    useEffect(() => {
        console.log(correctAnswer)
        console.log(userAnswer)
        const userScore = () =>{
            if(userAnswer === correctAnswer[questionCount]){
                setScore((prevState) => prevState += 1)
                console.log('correct')
            } else {
                console.log('incorrect')
            }
        }
        userScore()
    }, [userAnswer])
    useEffect(() => {
        const userData = [score]
        socket.emit('track_score', userData)
    }, [score])

    console.log(correctAnswer)
            
    let answers = shuffleAnswers[questionCount]
    // console.log('this is the mapped answers'+answersMap)
    return (
        <>
            <h4>{questions[questionCount]}</h4>

            {answers ?
                answers.map((a, i) =>
                <button id='answer' key={i} value={a} onClick={handleAnswer}>{a}</button>
                )
                : <h1>no</h1>
            } <br></br>

            <button onClick={nextQuestion}>Next Question</button>

        </>
    )
}
