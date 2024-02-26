import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import searchIcon from "../../../assets/searchicon.png";
import "./Header.scss";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className={`navbar ${showLinks ? "active" : ""}`}>
      <div className="container">
        <div className="search-container">
          <div className="search-icon">
            <img src={searchIcon} alt="SearchIcon" />
          </div>
          <input type="text" className="search-input" />
        </div>
        <div className="toggle-button" onClick={() => setShowLinks(!showLinks)}>
          <FaAlignJustify />
        </div>
        <div className="navbar-links">
          <NavLink to="/categories" className="navbar-link">
            Categories
          </NavLink>
          <NavLink to="/website-builders" className="navbar-link link">
            Website Builders
          </NavLink>
          <NavLink to="/todays-deals" className="navbar-link">
            Today's Deals
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
