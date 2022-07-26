import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineRestaurantMenu} from "react-icons/md";

import {images} from "../../constants";
import './Navbar.css';

const Navbar = () => (
  <nav className={'app__navbar'}>
    <div className='app__navbar-logo'>
        <img src={images.gericht} alt='app logo'/>
    </div>
      <ul>
          <li></li>
      </ul>
  </nav>
);

export default Navbar;
