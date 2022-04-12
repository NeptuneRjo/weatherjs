import React from 'react'
import './styling/body.css'

const BodyContent = ({ data }) => {

    const kelvinToFarenheit = (kelvin) => (
        ((kelvin - 273.15) * (9/5) + 32).toFixed(0)
    );

    return (
        <div className="body-main">
            <div className="weather-main">
                <div className="current-temp">
                    <div data-testid='temperature'>
                        {kelvinToFarenheit(data.main.temp)}°f
                    </div>
                    <p data-testid='location-name'>{data.name}</p>
                </div>
                <div className="weather-icon">
                    <img 
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
                        data-testid='weather-icon'
                        alt='Icon of the current weather'
                    />
                    <p data-testid='weather-description'>
                        {data.weather[0].description}
                    </p>
                </div>
            </div>
            <div className="weather-minmax">
                <div className="min-temp">
                    <div data-testid='weather-low'>
                        {kelvinToFarenheit(data.main.temp_min)}°f
                    </div>
                    <p>Low</p>
                </div>
                <div className="max-temp">
                    <div data-testid='weather-high'> 
                        {kelvinToFarenheit(data.main.temp_max)}°f
                    </div>
                    <p>High</p>
                </div>
            </div>
            <div className="weather-other">
                <div className="pressure">
                    <div data-testid='weather-pressure'>
                        {data.main.pressure}mb
                    </div>
                    <p>pressure</p>
                </div>
                <div className="wind-speed">
                    <div data-testid='weather-wind'>
                        {(data.wind.speed).toFixed(0)} mp/h
                    </div>
                    <p>wind speed</p>
                </div>
                <div className="humidity">
                    <div data-testid='weather-humidity'>
                        {data.main.humidity}%
                    </div>
                    <p>humidity</p>
                </div>
            </div>
        </div>
    )
}

export default BodyContent