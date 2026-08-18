import React, {useContext, useState} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Details } from '../App'
import "./Component.css"

export default function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isLogin, setIsLogin } = useContext(Details)
  const navigate = useNavigate()

  const handleLogout = () => {
    setIsLogin(false)
    navigate("/")
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
};

  return (
    <div className='nav-container'>

      <Link to="/" className='nav-log'>
        <i className="fa-solid fa-mobile nav-main-logo"></i>
        <h1 className='nav-head'>
          Mobile<span className='nav-head-main'>Hub</span>
        </h1>
      </Link>

      <button className="menu-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className={ isMenuOpen
                    ? "fa-solid fa-xmark"
                    : "fa-solid fa-bars"
            }
        ></i>
    </button>

      <ul className={ isMenuOpen
            ? "nav-list-container nav-menu-open"
            : "nav-list-container"}>

        <li>
          <NavLink to="/" className={({ isActive }) =>
    isActive ? "nav-item active" : "nav-item"} onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/product" className={({ isActive }) =>
    isActive ? "nav-item active" : "nav-item"} onClick={() => setIsMenuOpen(false)}>
            Product
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={({ isActive }) =>
    isActive ? "nav-item active" : "nav-item"} onClick={() => setIsMenuOpen(false)}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className={({ isActive }) =>
    isActive ? "nav-item active" : "nav-item"} onClick={() => setIsMenuOpen(false)}>
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart" className={({ isActive }) =>
    isActive ? "nav-item active" : "nav-item"} onClick={() => setIsMenuOpen(false)}>
            Cart
          </NavLink>
        </li>

        <li>
          {isLogin ? (
            <button
              className='log-btn'
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link
              className='log-btn log-btns'
              to="/login"
            >
              Login
            </Link>
          )}
        </li>

      </ul>

    </div>
  )
}