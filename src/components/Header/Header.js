import React from 'react'
import './styling/header.css';

const Header = () => {
  return (
    <div className="header-main gradient__bottom">
      <div className="header-secondary">
        <div className="header-logo">
          <h2>WeatherJS</h2>
        </div>
        <div className="header-search">
          <form>
            <input type="text" name="location" id="location" placeholder='Enter a town/city'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Header