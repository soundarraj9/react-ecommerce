import React, {useContext, useState, useEffect} from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { Details } from '../App'
import ProductCard from '../Components/ProductCard'
import Footer from '../Components/Footer'
import "./Pages.css"



export default function Home() {
  const {featureMobileArray,setFeartureMobileArray, mobileArray, brandNameArray, loading} = useContext(Details)
  
     



  return (
    <>
      <div className='home-container'>
        <div className='home-main-banner-container'>
          <div className='home-banner-text' >
            <h1 className='home-banner-head'>Latest Phone.</h1>
            <h1 className='home-banner-head head-two'>Best Price.</h1>
            <p className='home-banner-para'>Explore the latest smartphones with advanced features and amazing offers.</p>
            <button className='btn banner-btn'>Shop Now</button>
          </div>
        </div>

        <div className='hame-sevice-container'>
          <div className='home-service-card'>
            <div className='service-icon-card'>
              <i className="fa-solid fa-truck-fast service-icon"></i>
            </div>
            <div className='service-text-card'>
              <p className='service-head'>Free Delivery</p>
              <p className='serice-para'>Free shipping on all orders</p>
            </div>
          </div>
          <div className='home-service-card'>
            <div className='service-icon-card'>
              <i className="fa-solid fa-shield service-icon"></i>
            </div>
            <div className='service-text-card'>
              <p className='service-head'>1 Year Warranty</p>
              <p className='serice-para'>On all smartphones</p>
            </div>
          </div>
          <div className='home-service-card'>
            <div className='service-icon-card'>
              <i className="fa-solid fa-arrows-rotate service-icon"></i>
            </div>
            <div className='service-text-card'>
              <p className='service-head'>Easy Returns</p>
              <p className='serice-para'>7 days return policy</p>
            </div>
          </div>
          <div className='home-service-card'>
            <div className='service-icon-card'>
              <i className="fa-solid fa-headset service-icon"></i>
            </div>
            <div className='service-text-card'>
              <p className='service-head'>24/7 Support</p>
              <p className='serice-para'>We are here to help</p>
            </div>
          </div>
        </div>

        <div className='home-shop-brand'>
          <h1 className='home-sub-head'>Shop by Brand</h1>
        
          <div className='brand-logo-container'>
            <div className='brand-logo-card'>
              <Link to="/product/apple"><img className='brand-img brand-sec' src='/brand logo/apple logo.png'/></Link>
            </div>
            <div className='brand-logo-card'>
              <Link to="/product/samsung"><img className='brand-img' src='/brand logo/samsung logo.png'/></Link>
            </div>
            <div className='brand-logo-card'>
              <Link to="/product/redmi"><img className='brand-img' src='/brand logo/xiaomi logo.png'/></Link>
            </div>
            <div className='brand-logo-card'>
              <Link to="/product/oneplus"><img className='brand-img' src='/brand logo/oneplus logo.png'/></Link>
            </div>
            <div className='brand-logo-card'>
              <Link to="/product/realme"><img className='brand-img' src='/brand logo/realme logo.png'/></Link>
            </div>
            <div className='brand-logo-card'>
              <Link to="/product/vivo"><img className='brand-img brand-sec' src='/brand logo/vivo logo.png'/></Link>
            </div>
            <div className='brand-logo-card'>
              <Link to="/product/oppo"><img className='brand-img brand-sec' src='/brand logo/oppo logo.png'/></Link>
            </div>
            <div className='brand-logo-card'>
              <Link to="/product/motorola"><img className='brand-img' src='/brand logo/motorola logo.png'/></Link>
            </div>
          </div>
        </div>

        <div className='home-feature-container'>
          <h1 className='home-sub-head'>Featured Phones</h1>
          {
            loading ? (
              <p>Loading products...</p>
            ) : (
              <ul className="feature-product-container">
                {featureMobileArray.map((item) => (
                  <li key={item.productId}>
                    <ProductCard product={item} />
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      </div>

      <Footer />
    </>
  )
}
