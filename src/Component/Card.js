import React from 'react';
import { Link } from 'react-router-dom';

import "./Card.css"
const Card = ({imageUrl, heading,description,buttonText,LinkTo}) => {
  return (
    <div className='card'>
        <img src={imageUrl} alt="card" width= "300" height="400" />
      <div className='card-content'>
        <h3>{heading}</h3>
        <p>{description}</p>
        <Link to ={LinkTo}>
        <button>{buttonText}</button>
        </Link>

      </div>
    </div>
  );
};

export default Card;
