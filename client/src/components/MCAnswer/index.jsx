import React, { useEffect, useState } from 'react';

export const MCAnswer = ({ data }) => {

    const [questions, setQuestions] = useState([])
    // const [answers, setAnswers] = useState([])
    const [shuffleAnswers, setShuffleAnswers] = useState([])
    const [questionCount, setQuestionCount] = useState(0)

    useEffect(() => {

        let questionAndAnswer;
        let mixedAnswers;
        let allAnswers = [];
        let allQuestions = [];

        data.map((q) => {

            questionAndAnswer = {
                question: q.question,
                corr: q.correct_answer,
                inCorr: q.incorrect_answers
            }
            mixedAnswers = [questionAndAnswer.corr, ...questionAndAnswer.inCorr].sort(() => Math.random() - 0.5)
            allAnswers.push(mixedAnswers)
            allQuestions.push(questionAndAnswer.question)

        })
        setShuffleAnswers(allAnswers)
        setQuestions(allQuestions)

    }, [data])




    const nextQuestion = () => {
        setQuestionCount((prevState) => prevState + 1)

    }

    console.log(shuffleAnswers[questionCount])

    return (
        <div className="roomJoin">
            <h4>{questions[questionCount]}</h4>

            <ul id="questionContainer">

                <li> {shuffleAnswers[questionCount]}</li>
                <li> {shuffleAnswers[questionCount]}</li>
                <li> {shuffleAnswers[questionCount]}</li>
                <li> {shuffleAnswers[questionCount]}</li>

                {/* {shuffleAnswers[questionCount].map(a => { <li>{a}</li> })} */}

            </ul>

            <button  onClick={nextQuestion}>Next Question</button>

        </div>
    )
}
