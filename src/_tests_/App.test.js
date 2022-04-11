import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import App from '../App';

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

    describe('Body', () => {

        describe('render the default data', () => {

            it('should render Tampa\'s temperature', async () => {
                const { findByTestId } = render(<App />)

                expect(
                    await findByTestId('temperature')
                ).toBeInTheDocument();
            })

            it('should render Tampa\'s name', async () => {
                const { findByTestId } = render(<App />)

                expect(
                    await findByTestId('location-name')
                ).toBeInTheDocument();
            })

            it('should render Tampa\'s weather icon', async () => {
                const { findByTestId } = render(<App />)

                expect(
                    await findByTestId('weather-icon')
                ).toBeInTheDocument();
            })

            it('should render Tampa\'s weather description', async () => {
                const { findByTestId } = render(<App />)

                expect(
                    await findByTestId('weather-description')
                ).toBeInTheDocument();
            })

            it('should render Tampa\'s low/high temps', async () => {
                const { findByTestId } = render(<App />)

                expect(
                    await findByTestId('weather-low')
                ).toBeInTheDocument();

                expect(
                    await findByTestId('weather-high')
                ).toBeInTheDocument();
            })

            it('should render Tampa\'s pressure', async () => {
                const { findByTestId } = render(<App />)

                expect(
                    await findByTestId('weather-pressure')
                ).toBeInTheDocument();
            })

            it('should render Tampa\'s wind speed', async () => {
                const { findByTestId } = render(<App />)

                expect(
                    await findByTestId('weather-wind')
                ).toBeInTheDocument();
            })

            it('should render Tampa\'s humidity', async () => {
                const { findByTestId } = render(<App />)

                expect(
                    await findByTestId('weather-humidity')
                ).toBeInTheDocument();
            })

        })
    })
})