import { screen, render } from '@testing-library/react';
import { Footer } from '.';

describe('Footer', () => {
    test('it renders the footer', () => {
        render(<Footer />);
        const footer = screen.getByText('2021');
        expect(footer).toBeInTheDocument();
    })
})