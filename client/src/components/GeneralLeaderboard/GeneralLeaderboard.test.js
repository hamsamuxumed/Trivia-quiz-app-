import { screen, render } from '@testing-library/react';
import { GeneralLeaderboard } from '.';

describe('Leaderboard', () => {
    beforeEach(() => {
        render(<GeneralLeaderboard />);
    })

    test('it renders the leaderboard table', () => {
        const leader = screen.queryByRole('table');
        expect(leader).toBeInTheDocument();
    })

    test('it renders the table headers', () => {
        const nameHeader = screen.getByText('Name');
        const scoreHeader = screen.getByText('Score');
        expect(nameHeader).toBeInTheDocument();
        expect(scoreHeader).toBeInTheDocument();
    })

})