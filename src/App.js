import React, { useEffect, useState } from 'react'
import Body from './components/Body/Body';
import Header from './components/Header/Header';


const App = () => {

  const [location, setLocation] = useState('Tampa');

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null)


  const handleFetch = async () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${process.env.REACT_APP_PUBLIC_KEY}`
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

    setLocation(newLocation);
  }

  useEffect(() => {
    handleFetch(location)
    console.log(data)
  }, [location])


  return (
    <div className="app">
        <Header handleLocation={handleLocation}/>
        {isPending &&
          <div className="body-loading">
            <p>Loading...</p>
          </div>
        }
        <Body data={data} />
    </div>
  )
}

export default App