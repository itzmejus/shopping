import React from "react";
import "../Styles/Navbar.css";
import logo from "../media/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      {/* logo sectiion */}
      <div className="logo">
        <figure>
          <img src={logo}></img>
        </figure>
      </div>
      {/* logo sectiion end */}
      <div className="searchbar">
        <input type='search' placeholder="type here"/>
        <button>Search</button>
      </div>
      {/* pages section */}
      <div>
        <a href="/">Home</a>
        <a href="/">Cart</a>
        <a href="/">Account</a>
        <a href="/">Login</a>
      </div>
      {/* pages section */}
    </div>
  );
}

export default Navbar;
