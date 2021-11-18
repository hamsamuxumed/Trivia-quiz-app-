import { screen, render } from '@testing-library/react';
import { Home } from '.';

describe('Home', () => {
    test('it renders the homepage', () => {
        render(<Home />);
        const home = screen.queryByRole('document');
        expect(home).toBeInTheDocument();
    })
})