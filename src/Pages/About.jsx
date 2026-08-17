import React from 'react'
import Footer from '../Components/Footer'
import "./Pages.css"

export default function About() {

  const employeeData = [
  {
    empId: "EMP001",
    empName: "Kalyan Krishnamurthy",
    empImg: "/exeutive banner/emp1.png",
    designation: "Chief Operating Officer"
  },
  {
    empId: "EMP002",
    empName: "Arjun Raj",
    empImg: "/exeutive banner/emp2.png",
    designation: "Chief Technology Officer"
  },
  {
    empId: "EMP003",
    empName: "Priya Sharma",
    empImg: "/exeutive banner/emp3.png",
    designation: "Chief Financial Officer"
  },
  {
    empId: "EMP004",
    empName: "Vikram Kumar",
    empImg: "/exeutive banner/emp4.png",
    designation: "Chief Marketing Officer"
  },
  {
    empId: "EMP005",
    empName: "Meera Krishnan",
    empImg: "/exeutive banner/emp5.png",
    designation: "Chief Product Officer"
  },
  {
    empId: "EMP006",
    empName: "Rahul Anand",
    empImg: "/exeutive banner/emp6.png",
    designation: "Chief Information Officer"
  },
  {
    empId: "EMP007",
    empName: "Sneha Ramesh",
    empImg: "/exeutive banner/emp7.png",
    designation: "Chief Human Resources Officer"
  },
  {
    empId: "EMP008",
    empName: "Aditya Prakash",
    empImg: "/exeutive banner/emp8.png",
    designation: "Chief Business Officer"
  }
];


  return (
    <>
    <div className='home-container'>
      <div className='about-banner-container'>
        
        <div className='about-text-container'>
          <h1 className='about-head'>Soundarraj VP,<span className='high-light'> Founder & CEO - MobileHub</span></h1>

        <p className='about-para'>At MobileHub, our goal is to make smartphone shopping simple, transparent, and enjoyable for everyone. We bring the latest smartphones from leading brands together in one place, with competitive prices and a seamless shopping experience. We believe in continuous innovation, customer-first service, and making technology accessible to everyone. From discovering the right phone to getting it delivered to your doorstep, we strive to provide a reliable and exceptional experience for every customer.</p>
      </div>
        <img src="/exeutive banner/ceo 1.png" className='banner-about-img'/>
      </div>

      <div className='about-hub-banner-container'>
        <img src="/exeutive banner/about.png" className='banner-about-hub-img'/>
        <div className='about-hub-text-container'>
          <h1 className='about-mobilehub-head'>About MobileHub</h1>
          <p className='about-mobilehub-para'>MobileHub is a modern e-commerce platform dedicated to making smartphone shopping simple, convenient, and reliable. Our platform brings smartphones from leading brands together in one place, allowing customers to easily explore, compare, and choose the right device for their needs.

          From Apple, Samsung, Redmi, OnePlus, Realme, Vivo, OPPO, and Motorola, MobileHub offers a wide range of smartphones across different price ranges and specifications. Customers can explore product details, compare features, check availability, and find the best option that suits their requirements.

          At MobileHub, we focus on providing a smooth and user-friendly shopping experience. We believe that choosing a smartphone should be simple and transparent, which is why we provide clear product information, competitive pricing, and easy navigation throughout the platform.

          Our goal is to make the latest smartphone technology accessible to everyone while continuously improving the shopping experience through technology and innovation. With a customer-first approach, MobileHub aims to become a trusted destination for discovering and shopping for smartphones online.</p>
        </div>
        
      </div>

      <div className='about-leader-container'>
        <h1 className='about-leader-head'>Meet Our Leaders</h1>
        <div className='about-lead-card'>
          {
            employeeData.map((emp) => (
              <div className='lead-card' key={emp.empId}>
                <img src={emp.empImg} className='lead-img'/>
                <div className='lead-text'>
                  <p className='lead-name'>{emp.empName}</p>
                  <p className='lead-designation'>{emp.designation}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
