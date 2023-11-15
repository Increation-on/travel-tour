import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id='footer'>
      <h1><span>T</span>ravel</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo nostrum at et id porro fugiat!</p>
      <div className="social-links">
        <i className='fa-brands fa-twitter'></i>
        <i className='fa-brands fa-facebook'></i>
        <i className='fa-brands fa-instagram'></i>
        <i className='fa-brands fa-youtube'></i>
        <i className='fa-brands fa-pinterest-p'></i>
      </div>
      <div className='credit'>
        <p>Designed By <Link to={"https://www.youtube.com/"} target='_blank'>Something</Link> </p>
      </div>
      <div className="copyright">
        <p>&copy;Copyright Something. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer