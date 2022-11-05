import React from 'react'
import "../style/about.css";
import Slide from '../assets/slide.jpeg';
function about() {
  return (
    <div className='about'>
      <div className='abouttop' style={{backgroundImage: `url(${Slide})`}}></div>
      <div className='aboutbottom'>
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t
          empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui
          s nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
           sunt in culpa qui officia deserunt mollit ani</p>
      </div>
    </div>
  )
}

export default about