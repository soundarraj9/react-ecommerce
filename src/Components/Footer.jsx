import React from "react";
import { Link } from "react-router-dom";
import "./Component.css";

export default function Footer() {
  return (
    <>
       <footer className="footer-container">

      <div className="footer-brand">
        <h2>
          Mobile<span>Hub</span>
        </h2>

        <p>
          Your trusted destination for the latest smartphones
          at the best prices.
        </p>
      </div>


      <div className="footer-links">

        <h3>Quick Links</h3>

        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

      </div>


      <div className="footer-contact">

        <h3>Contact Us</h3>

        <p>
          <i className="fa-solid fa-envelope"></i>
          support@mobilehub.com
        </p>

        <p>
          <i className="fa-solid fa-phone"></i>
          +91 98765 43210
        </p>

      </div>


    </footer>

    <div className='footer-container-last'>
      <p className='footer-content-last'><i className="fa-regular fa-copyright copy-icon"></i> 2026 MobileHub. All rights reserved.</p>
    </div>

    </>
   
  )
}
