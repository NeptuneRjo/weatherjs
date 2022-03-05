import React, { useState } from 'react'
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import useFetch from './components/useFetch';


const App = () => {

  const [location, setLocation] = useState('Tampa');

  // Returns the JSON data, true while loading, and the error
  const {data, isPending, error} = useFetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${process.env.REACT_APP_PUBLIC_KEY}`)

  const handleLocation = (userLocation) => {
    const newLocation = userLocation;

    setLocation(newLocation);
  }

  return (
    <div className="app">
        <Header handleLocation={handleLocation}/>
        <Body location={location} data={data} isPending={isPending}/>
    </div>
  )
}

export default App