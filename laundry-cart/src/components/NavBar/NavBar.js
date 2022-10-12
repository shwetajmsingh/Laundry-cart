import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
        <nav className='navigation'><ul>
                <h1 className='logo'>LAUNDRY</h1>
                </ul>

            <ul className='navbars'>
                <li>
                    Pricing
                </li>
                <li>
                    Career
                </li>
            <ul className='signin'>    
                <li>
                    User Name
                </li>
            </ul>    
            </ul>
        </nav>
      
    </div>
  )
}

export default NavBar;
