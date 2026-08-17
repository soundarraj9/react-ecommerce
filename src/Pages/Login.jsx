import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Details } from "../App";
import "./Pages.css";

export default function Login() {

  const { setIsLogin } = useContext(Details)
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    setIsLogin(true);
    navigate("/");
  };

  return (
    <div className="login-main-container">

      <div className="login-container">

        <div className="login-icon-container">
          <i className="fa-solid fa-user login-icon"></i>
        </div>

        <h1 className="login-head">
          Welcome Back!
        </h1>

        <p className="login-para">
          Login to your account
        </p>

        <form
          className="login-form"
          onSubmit={handleLogin}
        >

          <div className="login-input-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>


          <div className="login-input-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>


          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}