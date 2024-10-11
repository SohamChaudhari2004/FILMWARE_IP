// src/components/header/Header.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Import useAuth
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth(); // Get user and logout function from context

  const handleLogout = () => {
    logout(); // Call logout from context
  };

  return (
    <div className="header">
      {user ? (<div className="headerLeft">
        <Link to="/">
          {/* <img
            className="header__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt="IMDB Logo"
          /> */}
          <div>
            <h2 style={{
              backgroundColor: "yellow",
              textDecoration: "none",
              padding :"3px",
              
            }}>FILMWARE</h2>
          </div>
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>) : 
      (
        <div/>
      )
      }
      <div className="headerRight">
        {user ? (
          <>
            <span style={{ color: 'white' }}>Welcome, {user.username}</span> {/* Display username */}
            <button onClick={handleLogout} style={{ marginLeft: '20px', cursor: 'pointer', borderRadius:"5px", padding : "3px" }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span>Login</span>
            </Link>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <span>Signup</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
