import React from 'react';

const Avenger = props => {
  return (
    <div className="list-item">
      <p>{props.avenger.name}</p>
      <p>{props.avenger.identity}</p>
    </div>
  )
};


export default Avenger;