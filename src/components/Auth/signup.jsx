import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const handleSignup = () => {
    if (password1 !== password) {
      console.log("password not matched");
    }
    const user = {
      email,
      name,
      password,
    };
    console.log(user);
  };
  return (
    <div className="form">
      <h2>Create New Account</h2>

      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      ></input>
      <br />
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />
      <label htmlFor="password1">Re-enter Password</label>
      <input
        type="password"
        id="password1"
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
      ></input>
      <br />
      <button className="submit-btn" onClick={handleSignup} disabled>
        Sign Up
      </button>

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
