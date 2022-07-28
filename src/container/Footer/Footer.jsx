import React from 'react';

import {FiFecebook, FiTwiter, FiInstagram} from "react-icons/fi";
import {FooterOverlay, Newsletter,} from '../../components'
import './Footer.css';
import {images} from "../../constants";

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
      <Newsletter/>

      <div className='app__footer-links'>
          <div className='app__footer-links_contact'>
             <h1 className='app__footer-headtext'>Contact Us</h1>
              <p className='p__opensans'> https://github.com/Dev420I</p>
              <p className='p__opensans'>+7 977-491-64-39</p>
          </div>
          <div className='app__footer-links_logo'>
              <img src={images.gericht} alt='footer_logo'/>
          </div>
          <div className='app__footer-links_work'>

          </div>
      </div>
      <div className='footer__copyright'>
          <p className='p__opensans'>2022 Gerícht.https://github.com/Dev420I.</p>
      </div>
  </div>
);

export default Footer;
