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

    console.log(shuffleAnswers)


    const nextQuestion = () => {
        setQuestionCount((prevState) => prevState + 1)

    }


    return (
        <>
            <h4>{questions[questionCount]}</h4>

            <ul>
                <li>{shuffleAnswers[0]}</li>

            </ul>

            <button onClick={nextQuestion}>Next Question</button>

        </>
    )
}
