// Tokyo.js
import React from 'react';

const Tokyo = () => {
  return (
    <div>
      <div className='tokyo'>
      <div className='tokyo-style'>
        <h3 style={{fontSize:"2.5rem"}}>Tokyo </h3>
        <p style={{fontSize:"1.25rem",fontWeight:"300"}}>Discover the Beauty of Tokyo</p>
      </div>
      </div>
      <div className='italy-overview'>
        <h2  style={{fontSize:"1.9rem",marginBottom:"1rem"}}>Welcome to Tokyo!</h2>
        <p style={{ fontSize:"1.1rem",marginTop:"0",marginBottom:"1rem"}}>Tokyo, the capital city of Japan, is a vibrant metropolis where modernity and tradition coexist. From futuristic skyscrapers to historic temples, Tokyo offers a unique blend of experiences for every traveler. </p> 
          <h2 style={{fontSize:"1.9rem",marginBottom:"1rem"}}>Explore Tokyo's Landmarks </h2>
          <div className='row'>
            <div className='row1'>
            <img src="https://placehold.co/600x400/EFEFEF/grey?text=Shibuya" alt="rome" className='image1' />
             <p>Visit the iconic Shibuya Crossing, one of the busiest pedestrian crossings in the world.</p>
            </div>
            <div className='row1'>
            <img src="https://placehold.co/600x400/EFEFEF/grey?text=Asakusa" alt="vencie" className='image1' />
             <p>Experience the traditional side of Tokyo in Asakusa, home to the historic Senso-ji Temple.</p>
            </div>
             <h2 style={{fontSize:"1.9rem",marginBottom:"1rem"}} >Indulge in Tokyo's Culinary Delights</h2>
             <p style={{ fontSize:"1.1rem",marginTop:"0",marginBottom:"1rem"}}>Explore the diverse and delicious world of Japanese cuisine, from sushi and ramen to street food delights.</p>
          </div>
        </div>
        
      

      
    </div>
  );
};

export default Tokyo;
