import React from 'react';
import Avenger from './Avenger';
import './Avenger.css';

const AvengersList = props => {
  console.log(props);
  return (
    <div className="list-wrapper">
      {props.avengers.map((avenger, i) => {
        return <Avenger key={i} avenger={avenger} />;
      })}
    </div>
  )
};


export default AvengersList;