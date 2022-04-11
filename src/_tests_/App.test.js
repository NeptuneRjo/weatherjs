import { render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'

import App from '../App';

beforeEach

describe('App', () => {

    describe('Header', () => {

        it('should render the title', async () => {
            const { findByText } = render(<App />)

            expect(await findByText('WeatherJS')).toBeVisible();
            expect(await findByText('WeatherJS')).toBeInTheDocument();
        })

        it('should render the input field', async () => {
            const { findByTestId } = render(<App />)

            expect(await findByTestId('input-location')).toBeVisible();
        })

        it('should display an empty input field', async () => {
            const { findByTestId } = render(<App />)
            const input = await findByTestId('input-location')

            expect(input.value).toBe('')

        })

        it('should display a value as its changed', async () => {
            const { findByTestId } = render(<App />)
            const input = await findByTestId('input-location')

            fireEvent.change(input, {target: {value: 'Hello, World!'}})
            expect(input.value).toBe('Hello, World!')

            fireEvent.change(input, {target: {value: 'Goodbye!'}})
            expect(input.value).toBe('Goodbye!')
        })
    })
})