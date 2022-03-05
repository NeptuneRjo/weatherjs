import React from 'react';
import './styling/body.css';

const Body = () => {
  return (
    <div className="body-main gradient__border">
      <div className="body-secondary">
        <div className="weather-main">
          <div className="current-temp">
            <div>79°</div>
            <p>Current Temperature in Tampa</p>
          </div>
          <div className="weather-icon"><img src='http://openweathermap.org/img/wn/01d@2x.png' /></div>
        </div>
        <div className="weather-minmax">
          <div className="min-temp">
            <div>64°</div>
            <p>Min. Temp</p>
          </div>
          <div className="max-temp">
            <div>84°</div>
            <p>Max. Temp</p>
          </div>
        </div>
        <div className="weather-other">
          <div className="pressure">
            <div>1000mb</div>
            <p>pressure</p>
          </div>
          <div className="wind-speed">
            <div>10mp/h</div>
            <p>wind speed</p>
          </div>
          <div className="humidity">
            <div>10%</div>
            <p>humidity</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body