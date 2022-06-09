import React from "react";
import '../styles/main.css'
import { useState }  from 'react';
import {BrowserRouter as Router,Link} from "react-router-dom";
import icon from "../assets/icons/Nav-icon.png"

function Navbar() {
    const [open, setOpen] = useState(false);
  return (
    <Router>
      <nav>

            <ul className='nav-links' style={{ transform: open ? "translateX(0px)" : "" }}>
              <li>
                <Link to="/"  id='link'>Home</Link>
              </li>
              <li>
                <Link  to="/achive" id='link'>Achive</Link>
              </li>
              <li>
                <Link  to="/about" id='link'>About</Link>
              </li>
              <li>
                <Link  to="/skill" id='link'>Skill </Link>
              </li>
                
              
            </ul>
            <i onClick={() => setOpen(!open)} className=' burger'><img src={icon} alt="nav icon" /></i>
    </nav>
  </Router>
  
  )
}

export default Navbar
