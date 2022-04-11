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
                    <div>{kelvinToFarenheit(data.main.temp)}°f</div>
                    <p>{data.name}</p>
                </div>
                <div className="weather-icon">
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
                    <p>{data.weather[0].description}</p>
                </div>
            </div>
            <div className="weather-minmax">
                <div className="min-temp">
                    <div>{kelvinToFarenheit(data.main.temp_min)}°f</div>
                    <p>Low</p>
                </div>
                <div className="max-temp">
                    <div>{kelvinToFarenheit(data.main.temp_max)}°f</div>
                    <p>High</p>
                </div>
            </div>
            <div className="weather-other">
                <div className="pressure">
                    <div>{data.main.pressure}mb</div>
                    <p>pressure</p>
                </div>
                <div className="wind-speed">
                    <div>{(data.wind.speed).toFixed(0)} mp/h</div>
                    <p>wind speed</p>
                </div>
                <div className="humidity">
                    <div>{data.main.humidity}%</div>
                    <p>humidity</p>
                </div>
            </div>
        </div>
    )
}

export default BodyContent