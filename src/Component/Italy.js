// Italy.js
import React from 'react';

const Italy = () => {
  return (
    <div>
      <div className='italy'>
      <div className='italy-style'>
        <h3 style={{fontSize:"2.5rem"}}>Italy </h3>
        <p style={{fontSize:"1.25rem",fontWeight:"300"}}>Explore the Beauty of Italy</p>
      </div>
      </div>
      <div className='italy-overview'>
        <h2  style={{fontSize:"1.9rem",marginBottom:"1rem"}}>Welcome to Italy!</h2>
        <p style={{ fontSize:"1.1rem",marginTop:"0",marginBottom:"1rem"}}>Italy, a country in Southern Europe, is known for its rich history, art, culture, and cuisine. From the ancient ruins of Rome to the beautiful canals of Venice, Italy offers a diverse and enchanting experience for travelers. </p> 
          <h2 style={{fontSize:"1.9rem",marginBottom:"1rem"}}>Discover </h2>
          <div className='row'>
            <div className='row1'>
            <img src="https://placehold.co/600x400/EFEFEF/grey?text=Rome" alt="rome" className='image1' />
             <p>Explore the historic streets of Rome and marvel at iconic landmarks like the Colosseum and Vatican City.</p>
            </div>
            <div className='row1'>
            <img src="https://placehold.co/600x400/EFEFEF/grey?text=Vencie" alt="vencie" className='image1' />
             <p>Experience the romantic atmosphere of Venice with its charming canals and historic architecture.</p>
            </div>
             <h2 style={{fontSize:"1.9rem",marginBottom:"1rem"}} >Savor Italian Cuisine</h2>
             <p style={{ fontSize:"1.1rem",marginTop:"0",marginBottom:"1rem"}}>Indulge in the delicious flavors of Italian cuisine, from authentic pasta and pizza to exquisite wines and gelato.</p>
          </div>
        </div>
        
      

      
    </div>
  );
};

export default Italy;
