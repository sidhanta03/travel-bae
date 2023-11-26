import React from 'react'

const Report = () => {
  return (
    <div>
        <div className='report'>
      <div className='report-style'>
        <h3 style={{fontSize:"2.5rem"}}>Travel Report </h3>
        <p style={{fontSize:"1.25rem",fontWeight:"300"}}>Explore insights and statics about our travel destinations.</p>
      </div>
      </div>

      <div className='destinations-overview'>
        <h2  style={{fontSize:"1.9rem",marginBottom:"1rem"}}>Destinations Overview</h2>
        <p style={{ fontSize:"1.1rem",marginTop:"0",marginBottom:"1rem"}}>Here is a summary of key information about our travel destinations: </p>
        <ul>
          <li>
          Total number of destinations: 4 </li>
          <li> Most popular destination: Bali</li>
          <li>Total number of visitors: 100</li>
        </ul>
        <h2 style={{fontSize:"1.9rem",marginBottom:"1rem"}}>Customer Feedback</h2>
        <p style={{ fontSize:"1.1rem",marginTop:"0",marginBottom:"1rem"}}>Read what our customers have to say about their travel experiences: </p>
        <div className='feedback'>
          <p>"I had an amazing time exploring Rome. The sights were breathtaking, and the people were so welcoming. Definitely a trip to remember!"</p>
          <p style={{fontSize:"18px",color:"#6c757d" ,marginTop:"1rem"}}> ─ John Doe</p>
        </div>
        <div className='feedback'>
          <p>"The travel arrangements were seamless, and the recommended activities in Bali were spot on. Thank you for a fantastic experience!"</p>
          <p style={{fontSize:"18px",color:"#6c757d" ,marginTop:"1rem"}}> ─ Jane Smith</p>
        </div>
      </div>
    </div>
    
  )
}

export default Report;
