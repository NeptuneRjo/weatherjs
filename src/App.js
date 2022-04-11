import React, { useEffect, useState } from 'react'
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import './App.css';


const App = () => {

  const [defaultLocation, setDefaultLocation] = useState('Tampa');

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null)


  const handleFetch = async (newLocation) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${newLocation}&APPID=${process.env.REACT_APP_PUBLIC_KEY}`
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setError(err.message);
          setIsPending(false);
        }

      });

      return () => abortCont.abort();
  }

  const handleLocation = (userLocation) => {
    const newLocation = userLocation;

    handleFetch(newLocation);
    handleSessionDefault(newLocation);
  }

  const handleSessionDefault = (newDefault) => {
    window.sessionStorage.setItem('location', newDefault);
  }

  useEffect(() => {
    if (window.sessionStorage.getItem('location') !== null) {
      handleFetch(window.sessionStorage.getItem('location'));
      return;
    }

    handleFetch(defaultLocation)
  }, [])

  if (isPending) {
    return (
      <div className="app-loading">
        <p>Loading...</p>
      </div>
    )
  }
  return (
    <div className="app">
        <Header handleLocation={handleLocation} />
        <Body data={data} />
    </div>
  )
}

export default App