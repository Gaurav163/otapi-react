import React from "react";
import "./create.scss";

const CreateProject = () => {
  return (
    <div>
      <div className="createproject">
        <h2> Create new Project here </h2>
        <hr />
        <br />
        <label htmlFor="name">Project Name</label>
        <input type="text" id="name"></input>
        <br />
        <small>
          *Project name should be unique , start with lowercase and conatins
          lowercase and digits only
        </small>
        <br />
        <br />

        <button className="width-m">Create Project</button>
      </div>
    </div>
  );
};

export default CreateProject;
