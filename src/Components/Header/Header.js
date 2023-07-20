import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"
function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar ">
        <nav style={{ backgroundColor: "#161617", marginTop: "-0.5em" }} className="  navbar navbar-light   w-100">
          <div className="container-fluid justify-content-center">
            <form className="d-flex">
              <input style={{ backgroundColor: "#525252", borderRadius: "0.5em", width: "20em" }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button style={{ backgroundColor: "#F5F5F7", borderRadius: "0.5em", color:"black" }} className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
  
      <nav  className="navbar w-100 ">
        <div className="nav-container">
          <ul style={{justifyContent:"center"}} className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/OurOffers"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Our Offers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Features"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Resources"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Resources
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Prices"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Prices
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
        </nav>
      </nav>
    </>
  );
}
export default Header