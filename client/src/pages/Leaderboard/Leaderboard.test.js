import { screen, render } from '@testing-library/react';
import { Leaderboard } from '.';

describe('Leaderboard', () => {
    test('it renders the leaderboard page', () => {
        render(<Leaderboard />);
        const leaderboard = screen.queryByRole('document');
        expect(leaderboard).toBeInTheDocument();
    })
})