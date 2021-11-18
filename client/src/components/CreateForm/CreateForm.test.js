import { CreateForm } from '.';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import io from 'socket.io-client';
import enzyme from 'enzyme';

const CONNECTION_URL = 'https://quiz-your-mind.herokuapp.com/';
let socket;
describe('create game form', () => {
    let form, difficulty, category, type, number, submit;

    beforeAll(() => {
        socket = io(CONNECTION_URL);
        let userName = 'Jeff';
        let roomNum = 'abc123';
        let roomCreated = true;
        render(<CreateForm socket={socket} userName={userName} roomNum={roomNum} roomCreated={roomCreated}/>);
        form = screen.getByRole('form');
        submit = screen.getByRole('button');
        difficulty = screen.getByLabelText('Select your difficulty:');
        category = screen.getByLabelText('Select your category:');
        type = screen.getByLabelText('Select what type of questions you would like:');
        number = screen.getByLabelText('How many questions?');
    });

    const mockGameState = jest.fn();

    jest.mock('react', () => ({
        useState: gameState => [gameState, mockGameState]
    }));

    test('it renders a form', () => {
        expect(form).toBeInTheDocument();;
    });

    test('it changes the selected difficulty value to the difficulty selected by the user', () => {
        userEvent.selectOptions(difficulty, 'Medium')
        expect(difficulty.value).toEqual('medium');
    });

    test('it changes the selected category value to the topic selected by the user', () => {
        userEvent.selectOptions(category, 'Films')
        expect(category.value).toEqual('11');
    })

    test('it changes the selected question type to the type selected by the user', () => {
        userEvent.selectOptions(type, 'Multiple Choice')
        expect(type.value).toEqual('multiple');
        console.log('createform')
    })

    test('it changes the selected difficulty value to the difficulty selected by the user', () => {
        userEvent.type(number, {target: {value: '10'}})
        expect(number.value).toEqual('10');
    })

    test('it changes the game state to true on submission', () => {
        userEvent.selectOptions(difficulty, 'medium');
        userEvent.selectOptions(category, '11');
        userEvent.selectOptions(type, 'multiple');
        userEvent.type(number, '10');
        userEvent.click(submit);
        expect(form).not.toBeInTheDocument();
    })

});