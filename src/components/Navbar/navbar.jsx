import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/ " className="logo">
        OTAPI
      </Link>
      <div className="nav-link">
        <a href="mailto:noreply.otapi@gmai.com">Contact us</a>
        <Link to="/signup">Log In</Link>
        <Link to="/signin">Sign Up</Link>
      </div>
    </div>
  );
};

export default Navbar;
