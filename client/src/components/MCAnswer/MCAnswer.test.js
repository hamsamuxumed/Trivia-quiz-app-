import { screen, render } from '@testing-library/react';
import io from 'socket.io-client';
import { MCAnswer } from '.';

const CONNECTION_URL = 'https://quiz-your-mind.herokuapp.com/';
let socket;

describe('MCAnswer', () => {
    beforeAll(() => {
        socket = io(CONNECTION_URL);
    })
    test('it renders a question', () => {
        let data = [
            { 
                question:'test question', 
                correct_answer:'correct', 
                incorrect_answers:['incorrect1','incorrect2','incorrect2']
            }
        ]
        render(<MCAnswer socket={socket} data={data}/>);
        const nextQButton = screen.queryByText('Next Question');
        const questions = screen.queryAllByRole('button');
        expect(nextQButton).toBeInTheDocument();
        expect(questions.length).toBe(5);
    }) 
})