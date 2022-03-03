import React from 'react';
import { useState } from 'react'

const Nav = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
    // console.log('cli');

  }

  return (
     <div className="heads">
          <div className="container">
          <div className="nav">
          <img src="Assets/Logo.svg" alt="" srcset="" className='logo'/>

          <i class="fa-solid fa-bars icon1" onClick={toggleOpen}></i>
          
          <i class="fa-regular fa-circle-xmark icon2" ></i>
          <div className="lists" 
               style={
                open
                  ? { transform: "translate(0, 40px)" }
                  : { transform: "translate(0, -280px)" }
              }
          >
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li className='sub'><a href="#">Subscribe</a></li>
              </ul>
          </div>
          </div>
      </div>
     </div>
  );
};

export default Nav;
