import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import http from "../../services/http";
import "./style.scss";

const Dashboard = () => {
  let navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  const loadProjects = async () => {
    try {
      const resp = await http.get("/project/projects");
      console.log(resp.data);
      setProjects(resp.data.projects);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  useEffect(() => {});

  return (
    <div className="dashboard">
      <div style={{ fontSize: "x-large", fontWeight: "500", margin: "20px" }}>
        My Projects
      </div>
      <hr />
      {projects.map((project) => (
        <div
          className="project"
          key={project}
          onClick={() => navigate(`/project/${project}`)}
        >
          {project}
        </div>
      ))}

      <br />
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
