import React from 'react'
import Footer from '../Components/Footer'
import "./Pages.css"

export default function Contact() {
  return (
    <>
      <div className='main-contact-container'>
        <div className='contact-container'>
          <div className='contact-input-container'>
            <h1 className='contact-head'>Contact Us</h1>
            <p className='contact-para'>Have any questions or need assistance? Feel free to contact us. Our team is always ready to help you with your queries and provide the support you need.</p>

            <form className="contact-form">

              <div className="contact-input-group">
                  <label htmlFor="name">Name</label>
                  <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                  />
              </div>

              <div className="contact-input-group">
                  <label htmlFor="email">Email</label>
                  <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                  />
              </div>

              <div className="contact-input-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                      id="description"
                      rows="4"
                      placeholder="Enter your message"
                  ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                  <i className="fa-solid fa-paper-plane"></i>
                  Submit
              </button>

          </form>

          </div>

          <div className='contact-detail-container'>
            <div className='contact-box'>
              <div className='contact-icon-card'>
                  <i className="fa-solid fa-location-dot cont-icon"></i>
              </div>
              <div className='contact-text-card'>
                <p className='contact-text-head'>Address</p>
                <p className='contact-text-para'>Outer Ring Road, Devarabeesanahalli Village, <br/>Bengaluru, 560103, Karnataka, India</p>
              </div>
            </div>
            <div className='contact-box'>
              <div className='contact-icon-card'>
                  <i className="fa-solid fa-phone cont-icon"></i>
              </div>
              <div className='contact-text-card'>
                <p className='contact-text-head'>Contact</p>
                <p className='contact-text-para'>Talk to us and see how we can work <br />1800-14-0147</p>
              </div>
            </div>
            <div className='contact-box'>
              <div className='contact-icon-card'>
                  <i className="fa-solid fa-envelope cont-icon"></i>
              </div>
              <div className='contact-text-card'>
                <p className='contact-text-head'>Email</p>
                <p className='contact-text-para'>We're usually replaying within 24 hours <br />pagedone1234@gmail.com</p>
              </div>
            </div>
            <div className='contact-box'>
              <div className='contact-icon-card'>
                  <i className="fa-solid fa-clock cont-icon"></i>
              </div>
              <div className='contact-text-card'>
                <p className='contact-text-head'>Working Hours</p>
                <p className='contact-text-para'>Mon To Sat-10 am To 7 pm
                <br />Sunday 11am To 5 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
