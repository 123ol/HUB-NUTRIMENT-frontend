
import "../../styles/header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";
import logo from "../../assets/img/logo.png"
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container logo">
            <Link to="/" className="navbar-logo logo__img" onClick={closeMobileMenu} style={{color:"#132742"}}>
             <img src={logo} alt="" />
HUB NUTRIMENT
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                 About-us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/TermsandConditions"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Terms and Conditions
                </NavLink>
              </li>
              
              <Link to="/Signup">
              <button className="regist mobilbtn" >
            Register</button></Link>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Header;
