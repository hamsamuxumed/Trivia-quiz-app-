import { screen, render } from '@testing-library/react';
import io from 'socket.io-client';
import { Lobby } from '.';

const CONNECTION_URL = 'https://quiz-your-mind.herokuapp.com/';
let socket;

describe('Lobby', () => {
    beforeAll(() => {
        socket = io(CONNECTION_URL);
    })
    test('it renders the lobby page', () => {
        let userName = 'jeff';
        let roomNum = 'abc123';
        let createR = true;
        render(<Lobby socket={socket} userName={userName} roomNum={roomNum} createR={createR}/>);
        const lobby = screen.queryByRole('document');
        expect(lobby).toBeInTheDocument();
    })
})