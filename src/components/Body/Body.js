import React from 'react';
import './styling/body.css';
import './BodyContent/BodyContent';
import BodyContent from './BodyContent/BodyContent';

const Body = ({ data }) => {

  return (
    <div className="body-main gradient__border">
      <BodyContent data={data} />
    </div>
  )
}

export default Body