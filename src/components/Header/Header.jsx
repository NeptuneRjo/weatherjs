import React from 'react'
import './styling/header.css';

const Header = ({ handleLocation }) => {

  const handleSubmit = (event) => {
    const userInput = document.getElementById('input-location')
    event.preventDefault();
    
    handleLocation(userInput.value);
    userInput.value = '';
  }

  return (
    <div className="header-main">
      <div className="header-content">
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