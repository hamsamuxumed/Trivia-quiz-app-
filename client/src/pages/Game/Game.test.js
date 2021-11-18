import { screen, render } from '@testing-library/react';
import io from 'socket.io-client';
import { Game } from '.';

const CONNECTION_URL = 'https://quiz-your-mind.herokuapp.com/';
let socket;
let userName;
let roomNum;
let roomCreated;
let questionNum;
let difficulty;
let type;
let category;

describe('Game', () => {
    beforeAll(() => {
        socket = io(CONNECTION_URL);
        userName = 'jeff';
        roomNum = 'abc123';
        roomCreated = true;
        questionNum = 10;
        difficulty = 'hard';
        type = 'multiple_choice';
        category = 'films';
        render(<Game socket={socket} userName={userName} roomNum={roomNum} roomCreated={roomCreated} questionNum={questionNum} difficulty={difficulty} type={type} category={category}/>);
    })
    test('it renders the game page', () => {
        const game = screen.queryByRole('document');
        expect(game).toBeInTheDocument();
    });

    test('it does not render the start button', () => {
        const startButton = screen.queryByText('Start Game');
        expect(startButton).not.toBeInTheDocument();
    })

    test('it does not render the end button', () => {
        const startButton = screen.queryByText('End Game');
        expect(startButton).not.toBeInTheDocument();
    })

    test('it renders a leaderboard of users in the room', () => {
        const userBoard = screen.queryAllByRole('listbox');
        expect(userBoard).toBeInstanceOf(Array);
    })
})