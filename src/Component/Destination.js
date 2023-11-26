import React from 'react';
import Card from "./Card";

const Destination = () => {
  return (
    <div className='home'>
      <div className='style-home'>
        <h1>Explore Our Destination</h1>
      </div>

        <div className='app'>
        <Card 
           imageUrl="https://placehold.co/400x300/EFEFEFF/grey?text=Italy"
            heading="Italy"
            description="Discover the beauty of italy."
            buttonText="Learn More"
            LinkTo="/destination/italy"
          /><Card 
          imageUrl="https://placehold.co/400x300/EFEFEFF/grey?text=Tokyo"
           heading="Tokoyo"
           description="Discover the beauty of Tokyo."
           buttonText="Learn More"
           LinkTo="/destination/tokyo"
         />

         <Card 
          imageUrl="https://placehold.co/400x300/EFEFEFF/grey?text=Bali"
           heading="Bali"
           description="Discover the beauty of Bali."
           buttonText="Learn More"
           LinkTo="/destination/bali"
         />
         <Card 
          imageUrl="https://placehold.co/400x300/EFEFEFF/grey?text=Rome"
           heading="Rome"
           description="Discover the beauty of Rome."
           buttonText="Learn More"
           LinkTo="/destination/rome"
         />
          
        </div>
        

      
    </div>
  )
}

export default Destination;
