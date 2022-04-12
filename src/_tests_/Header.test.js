import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import Header from '../components/Header/Header';

const mockHandleLocation = jest.fn();

const renderHeader = () => {
    return (
        render(<Header handleLocation={mockHandleLocation} />)
    )
}

describe('Header', () => {

    it('should render the title', async () => {
        const { getByText } = renderHeader();

        expect(getByText('WeatherJS')).toBeVisible();
        expect(getByText('WeatherJS')).toBeInTheDocument();
    })

    it('should render the input field', async () => {
        const { getByTestId } = renderHeader();

        expect(getByTestId('input-location')).toBeVisible();
    })

    it('should display an empty input field', async () => {
        const { getByTestId } = renderHeader();
        const input = getByTestId('input-location')

        expect(input.value).toBe('')
    })

    it('should display a value as its changed', async () => {
        const { getByTestId } = renderHeader();
        const input = getByTestId('input-location')

        fireEvent.change(input, {target: {value: 'Hello, World!'}})
        expect(input.value).toBe('Hello, World!')

        fireEvent.change(input, {target: {value: 'Goodbye!'}})
        expect(input.value).toBe('Goodbye!')
    })
})
