import { screen, render } from '@testing-library/react';
import { Header } from '.';

describe('Header', () => {
    test('it renders a nav tag', () => {
        render(<Header />);
        const nav = screen.queryByRole('navigation');
        expect(nav).toBeInTheDocument();
    })
})