import React, { useState } from 'react'

const BodyContent = ({ data }) => {

    const handleKelToFah = (kelvin) => (
        ((kelvin - 273.15) * (9/5) + 32).toFixed(0)
    );

    return (
        <div className="body-secondary">
            <div className="weather-main">
                <div className="current-temp">
                <div>{handleKelToFah(data.main.temp)}°f</div>
                <p>Current Temperature in {data.name}</p>
                </div>
                <div className="weather-icon"><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} /><p>{data.weather[0].description}</p></div>
            </div>
            <div className="weather-minmax">
                <div className="min-temp">
                <div>{handleKelToFah(data.main.temp_min)}°f</div>
                <p>Min. Temp</p>
                </div>
                <div className="max-temp">
                <div>{handleKelToFah(data.main.temp_max)}°f</div>
                <p>Max. Temp</p>
                </div>
            </div>
            <div className="weather-other">
                <div className="pressure">
                <div>{data.main.pressure}mb</div>
                <p>pressure</p>
                </div>
                <div className="wind-speed">
                <div>{data.wind.speed}mp/h</div>
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