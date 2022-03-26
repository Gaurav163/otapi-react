import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="form">
      <h2>Create New Account</h2>
      <label htmlFor="email">Email</label>
      <input type="text" id="email"></input>
      <br />
      <label htmlFor="name">Name</label>
      <input type="text" id="name"></input>
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password"></input>
      <br />
      <label htmlFor="passwordc">Re-enter Password</label>
      <input type="password" id="passwordc"></input>
      <br />
      <button className="submit-btn">Sign Up</button>
      <br />
      <br />
      <hr />
      <div style={{ textAlign: "center", margin: "20px" }}>
        Already have an account?{"  "}
        <Link to="/signin" className="link">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Signup;
