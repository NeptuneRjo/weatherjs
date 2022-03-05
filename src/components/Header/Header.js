import React, { useState } from 'react'
import './styling/header.css';

const Header = ({ handleLocation }) => {

  const handleSubmit = (event) => {
    const userLocation = document.getElementById('input-location').value
    event.preventDefault();

    handleLocation(userLocation);
  }

  return (
    <div className="header-main gradient__bottom">
      <div className="header-secondary">
        <div className="header-logo">
          <h2>WeatherJS</h2>
        </div>
        <div className="header-search">
          <form onSubmit={(event) => {handleSubmit(event)}}>
            <input 
              type="text" 
              name="location" 
              id="input-location" 
              placeholder='Enter a town/city' 
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Header