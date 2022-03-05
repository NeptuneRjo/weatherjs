import React, { useState } from 'react'
import Body from './components/Body/Body';
import Header from './components/Header/Header';

const App = () => {
  const link = "http://api.openweathermap.org/data/2.5/weather?q=${locationToUse}&APPID={process.env.REACT_APP_CHEC_PUBLIC_KEY}"

  const [location, setLocation] = useState('Tampa');

  const handleLocation = (userLocation) => {
    const newLocation = userLocation;

    setLocation(newLocation);
  }

  return (
    <div className="app">
        <Header handleLocation={handleLocation}/>
        <Body location={location}/>
    </div>
  )
}

export default App