// Navbar.js
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const[activeLink,setActiveLink]= useState('');

  const handleLinkClick=(link)=>{
    setActiveLink(link);
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav>
       <div className='navbar'>
        <p style={{fontSize:"20px"}}>TravelBae</p>
           <div className= {`nav-links ${showMenu ? 'show' : ''}`}>
          <Link to="/"
            className={activeLink === '/' ? 'active' :''}
            onClick={()=>handleLinkClick('/')}          
          >Home</Link>
          <Link to="/destination"
           className={activeLink === '/destination' ? 'active' :''}
           onClick={()=>handleLinkClick('/destination')} 
          >Destinations</Link>
          <Link to="/report"
           className={activeLink === '/report' ? 'active' :''}
           onClick={()=>handleLinkClick('/report')} 
          >Report</Link>
          </div>
          <div className='nav-toggler' onClick={toggleMenu}>
          ☰ 
        </div>
          </div>
    </nav>
  );
};

export default Navbar;

