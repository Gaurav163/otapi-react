import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h3>My Projects</h3>
      <hr />
      <div className="project">College</div>
      <div className="project">School</div>
      <br />
      <br />
      <Link to="/" className="link">
        Create New Project
      </Link>
      <br />
      <br />
    </div>
  );
};

export default Dashboard;
