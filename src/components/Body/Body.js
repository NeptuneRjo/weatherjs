import React from 'react';
import './styling/body.css';
import './BodyContent/BodyContent';
import BodyContent from './BodyContent/BodyContent';

const Body = ({ data, isPending }) => {

  return (
    <div className="body-main gradient__border">
      {isPending &&
        <div className="body-loading">
          <p>Loading...</p>
        </div>
      }
      <BodyContent data={data} />
    </div>
  )
}

export default Body