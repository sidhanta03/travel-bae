// Bali.js
import React from 'react';

const Bali = () => {
  return (
    <div>
      <div className='bali'>
      <div className='bali-style'>
        <h3 style={{fontSize:"2.5rem"}}>Bali</h3>
        <p style={{fontSize:"1.25rem",fontWeight:"300"}}>Discover the Beauty of Bali</p>
      </div>
      </div>
      <div className='italy-overview'>
        <h2  style={{fontSize:"1.9rem",marginBottom:"1rem"}}>Welcome to Bali!</h2>
        <p style={{ fontSize:"1.1rem",marginTop:"0",marginBottom:"1rem"}}> Bali, an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs. Immerse yourself in the vibrant culture, lush landscapes, and spiritual ambiance of Bali.</p> 
          <h2 style={{fontSize:"1.9rem",marginBottom:"1rem"}}>Explore Bali's Natural Wonders </h2>
          <div className='row'>
            <div className='row1'>
            <img src="https://placehold.co/600x400/EFEFEF/grey?text=Ubud" alt="rome" className='image1' />
             <p>Visit the cultural heart of Bali in Ubud, surrounded by lush rice terraces and traditional crafts.</p>
            </div>
            <div className='row1'>
            <img src="https://placehold.co/600x400/EFEFEF/grey?text=Kuta" alt="vencie" className='image1' />
             <p>Experience the vibrant nightlife and famous beaches in Kuta, perfect for surf enthusiasts and sun-seekers.</p>
            </div>
             <h2 style={{fontSize:"1.9rem",marginBottom:"1rem"}} >Immerse Yourself in Balinese Culture</h2>
             <p style={{ fontSize:"1.1rem",marginTop:"0",marginBottom:"1rem"}}>Participate in traditional ceremonies, witness captivating dance performances, and savor the unique flavors of Balinese cuisine.</p>
          </div>
        </div>
        
      

      
    </div>
  );
};

export default Bali;
