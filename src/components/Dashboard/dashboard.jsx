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
      <div style={{ fontSize: "x-large", fontWeight: "500", margin: "20px" }}>
        My Projects
      </div>
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
