import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import App from '../App';
import Body from '../components/Body/Body';

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

        const data = {
            main: {
                temp: 255.927778,
                temp_min: 255.927778,
                temp_max: 255.927778,
                pressure: '1000',
                humidity: 10
            },
            wind: {
                speed: 5.14
            },
            name: 'Orlando',
            weather: [
                {
                    icon: '04d',
                    description: 'weather'
                }
            ]
        }

        describe('the content renders correctly', () => {

            it('should render Tampa\'s temperature', async () => {
                const { getByTestId } = render(<Body data={data} />)

                expect(
                    getByTestId('temperature')
                ).toBeInTheDocument();
            })

            it('should render Tampa\'s name', async () => {
                const { getByTestId } = render(<Body data={data} />)

                expect(
                    getByTestId('location-name')
                ).toBeInTheDocument();
            })

            it('should render Tampa\'s weather icon', async () => {
                const { getByTestId } = render(<Body data={data} />)

                expect(
                    getByTestId('weather-icon')
                ).toBeInTheDocument();
            })

            it('should render Tampa\'s weather description', async () => {
                const { getByTestId } = render(<Body data={data} />)

                expect(
                    getByTestId('weather-description')
                ).toBeInTheDocument();
            })

            it('should render Tampa\'s low/high temps', async () => {
                const { getByTestId } = render(<Body data={data} />)

                expect(
                    getByTestId('weather-low')
                ).toBeInTheDocument();

                expect(
                    getByTestId('weather-high')
                ).toBeInTheDocument();
            })

            it('should render Tampa\'s pressure', async () => {
                const { getByTestId } = render(<Body data={data} />)

                expect(
                    getByTestId('weather-pressure')
                ).toBeInTheDocument();
            })

            it('should render Tampa\'s wind speed', async () => {
                const { getByTestId } = render(<Body data={data} />)

                expect(
                    getByTestId('weather-wind')
                ).toBeInTheDocument();
            })

            it('should render Tampa\'s humidity', async () => {
                const { getByTestId } = render(<Body data={data} />)

                expect(
                    getByTestId('weather-humidity')
                ).toBeInTheDocument();
            })

        })

        describe('the data is rendered correctly', () => {

            it('should render the correct temperature', () => {
                const { getByTestId } = render(<Body data={data} />)

                expect(
                    getByTestId('temperature')
                ).toHaveTextContent('1°f')
            })

            it('should render the correct name', () => {
                const { getByTestId } = render(<Body data={data} />)

                expect(
                    getByTestId('location-name')
                ).toHaveTextContent('Orlando')
            })

            it('should render the correct icon', () => {
                const { getByTestId } = render(<Body data={data} />)
                const url = 'http://openweathermap.org/img/wn/04d@2x.png'

                expect(
                    getByTestId('weather-icon')
                ).toHaveAttribute('src', url)

                expect(
                    getByTestId('weather-icon')
                ).toHaveAttribute('alt', 'Icon of the current weather')
            })

            it('should render the correct description', () => {
                const { getByTestId } = render(<Body data={data} />)

                expect(
                    getByTestId('weather-description')
                ).toHaveTextContent('weather')
            })

            it('should render the correct low/high temp', () => {
                const { getByTestId } = render(<Body data={data} />)

                expect(
                    getByTestId('weather-low')
                ).toHaveTextContent('1°f')

                expect(
                    getByTestId('weather-high')
                ).toHaveTextContent('1°f')
            })

            it('should render the correct pressure', () => {
                const { getByTestId } = render(<Body data={data} />)

                expect(
                    getByTestId('weather-pressure')
                ).toHaveTextContent('1000mb')
            })

            it('should render the correct wind speed', () => {
                const { getByTestId } = render(<Body data={data} />)

                expect(
                    getByTestId('weather-wind')
                ).toHaveTextContent('5 mp/h')
            })

            it('should render the correct humidty', () => {
                const { getByTestId } = render(<Body data={data} />)

                expect(
                    getByTestId('weather-humidity')
                ).toHaveTextContent('10%')
            })
        })
    })
})