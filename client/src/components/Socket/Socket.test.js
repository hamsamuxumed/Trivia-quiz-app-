import { screen, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { Socket } from '.';

describe('Socket', () => {
    test('it renders a form', () => {
        render(<Socket />);
        const form = screen.queryByRole('form');
        expect(form).toBeInTheDocument();
    })

})