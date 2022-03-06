import React from 'react';
import './styling/body.css';
import BodyContent from './BodyContent/BodyContent';

const Body = ({ data }) => {

  return (
    <div className="body-main gradient__border">
      {/* Prevents BodyContent from trying to load while data is unavailable */}
      {data !== null && 
        <BodyContent data={data} />
      }
    </div>
  )
}

export default Body