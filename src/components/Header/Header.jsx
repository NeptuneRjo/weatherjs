import React, { useState } from 'react'
import './styling/header.css';

const Header = ({ handleLocation }) => {

  const [location, setLocation] = useState('')

  const handleSubmit = (event) => {
    const userInput = document.getElementById('input-location')
    event.preventDefault();
    
    handleLocation(userInput.value);
    userInput.value = '';
    setLocation('')
  }

  return (
    <div className="header-main">
      <div className="header-content">
        <div className="header-logo">
          <h2>WeatherJS</h2>
        </div>
        <div className="header-search">
          <form 
            onSubmit={(event) => {handleSubmit(event)}} 
            data-testid='form'
          >
            <input 
              type="text" 
              name="location" 
              id="input-location" 
              placeholder='Enter a town/city' 
              data-testid='input-location'
              value={location}
              onChange={(e) => {setLocation(e.target.value)}}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Header