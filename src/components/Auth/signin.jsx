import { Link } from "react-router-dom";
import React from "react";
import "./style.scss";

const Signin = () => {
  return (
    <div className="form">
      <h2>Log in to your account</h2>
      <label htmlFor="email">Email</label>
      <input type="text" id="email"></input>
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password"></input>
      <br />
      <button className="submit-btn">Sign In</button>
      <br />
      <br />
      <hr />
      <div style={{ textAlign: "center", margin: "20px" }}>
        New to OTApi?{"  "}
        <Link to="/signup" className="link">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Signin;
