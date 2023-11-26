import React from 'react'
import { Link } from 'react-router-dom';
import Card from "./Card";

const Home = () => {
  return (
    <div className='home'>
      <div className='style-home'>
        <h1>Welcome to TravelBae</h1>
        <p style={{fontFamily: "Arial", fontSize:"18px",marginBottom: "1rem",marginTop:"0"}}>Explore exciting destinations with us!</p>
      </div>
       <h5 style={{fontSize:"2rem",textAlign:"center", fontWeight:"700", fontFamily:"Arial, Helvetica, sans-serif"} }>Featured Destinations</h5>
        <div className='app'>
          <Card 
           imageUrl="https://placehold.co/400x300/EFEFEFF/grey?text=Italy"
            heading="Italy"
            description="Discover the beauty of italy."
            buttonText="Learn More"
            LinkTo="/destination/italy"
          />

          <Card 
           imageUrl="https://placehold.co/400x300/EFEFEFF/grey?text=Tokyo"
            heading="Tokyo"
            description="Discover the beauty of Tokyo.."
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
        </div>
          <div className='butn'>
            <p style={{textAlign:"center", marginBottom:"1.2rem",fontSize:"2rem", fontWeight:"500" }}>Discover More</p>
            <p style={{fontWeight:"300", fontSize:"1.25rem",color:"#343a40"}}>Explore our handpicked destinatios and create memories that last a lifetime.</p>
            <Link to="/destination">
            <button style={{marginTop:"1rem",
    fontSize: "15px"  }} >View All Destinations</button>
    </Link>
          </div>
         
    </div>
  )
}

export default Home;
