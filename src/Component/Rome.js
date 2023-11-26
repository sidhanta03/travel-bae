// Rome.js
import React from 'react';

const Rome = () => {
  return (
    <div>
      <div className='rome'>
      <div className='rome-style'>
        <h3 style={{fontSize:"2.5rem"}}>Rome </h3>
        <p style={{fontSize:"1.25rem",fontWeight:"300"}}>Discover the Beauty of Rome</p>
      </div>
      </div>
      <div className='italy-overview'>
        <h2  style={{fontSize:"1.9rem",marginBottom:"1rem"}}>Welcome to Rome!</h2>
        <p style={{ fontSize:"1.1rem",marginTop:"0",marginBottom:"1rem"}}>Rome, the capital city of Italy, is a treasure trove of history, art, and culture. From ancient wonders like the Colosseum to the splendor of the Vatican City, Rome is a destination that captivates visitors with its timeless beauty.</p> 
          <h2 style={{fontSize:"1.9rem",marginBottom:"1rem"}}>Explore the Rich History </h2>
          <div className='row'>
            <div className='row1'>
            <img src="https://placehold.co/600x400/EFEFEF/grey?text=Colosseum" alt="rome" className='image1' />
             <p>Step back in time as you visit the iconic Colosseum, a symbol of ancient Roman engineering and entertainment.</p>
            </div>
            <div className='row1'>
            <img src="https://placehold.co/600x400/EFEFEF/grey?text=RomanForum" alt="vencie" className='image1' />
             <p>Explore the ruins of the Roman Forum, where political, religious, and commercial activities once thrived.</p>
            </div>
             <h2 style={{fontSize:"1.9rem",marginBottom:"1rem"}} >Experience Vatican City</h2>
             <p style={{ fontSize:"1.1rem",marginTop:"0",marginBottom:"1rem"}}>Discover the artistic and spiritual treasures of Vatican City, including St. Peter's Basilica and the Sistine Chapel.</p>
          </div>
        </div>
        
      

      
    </div>
  );
};

export default Rome;
