import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { Link } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  const [projects, setProjects] = useState([
    { name: "College" },
    { name: "School" },
  ]);
  return (
    <div className="dashboard">
      <h3>My Projects</h3>
      <hr />
      {projects.map((project) => (
        <div
          className="project"
          key={project.name}
          onClick={() => navigate(`/project/${project.name}`)}
        >
          {project.name}
        </div>
      ))}

      <br />
      <br />
      <Link to="/createproject" className="link">
        Create New Project
      </Link>
      <br />
      <br />
    </div>
  );
};

export default Dashboard;
