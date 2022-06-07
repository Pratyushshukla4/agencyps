import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="agency">
        <span className="agency1">Agency</span>
        </div>
        <div className="head">
            <div className="head1">
            <a href="/" className="headlist">Home</a>
            <a href="/" className="headlist">Service</a>
            <a href="/" className="headlist fff">Features</a>
            <a href="/" className="headlist">Pricing</a>
            <a href="/" className="headlist">Control</a>
            </div>
            {/* <div className="head2"></div> */}
        </div> 
        <div className="join">
        <span className="join1">Join Today</span>
        </div>
      
    </div> 
  )
}

export default Navbar
