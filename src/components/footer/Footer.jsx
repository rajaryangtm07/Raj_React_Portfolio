import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
const Footer = () => {
  return (
   <footer>
      <a href='#' className="footer_logo">RAJ</a> 
       <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>

      </ul>
      <div className='footer__social'>
          <a href='https://facebook.com'><FaFacebookF/></a>
          <a href='https://instagram.com'><AiOutlineInstagram/></a>
          <a href='https://twitter.com'><FiTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; RAJ PORTFOLIO . All rights reserved</small>
      </div>
   </footer>
  )
}

export default Footer