import React from 'react'
import { Link } from 'react-router-dom';
import Banner from "../assets/banner.jpeg";
import'../style/homes.css';

function homes() {
  return (
   <div className='homes' style={{ backgroundImage: `url(${Banner})` }}>
    <div className="h-container">
      <h1>Hot pizza</h1>
      <p>Pizza is not hot we give your money back.</p>
      <Link to={'/menu'}> <button >Order now</button></Link>
    </div>
   </div>
  )
}

export default homes