import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import http from "../../services/http";
import "./style.scss";

const Project = () => {
  let [count, setCount] = useState(0);
  let [display, setDisplay] = useState({});
  let [info, setinfo] = useState({});
  let params = useParams();
  let [tables, setTables] = useState([]);
  const project = params.project;

  const handleTableToggle = (name) => {
    let newdis = display;
    if (display[name] === true) {
      newdis[name] = false;
    } else {
      newdis[name] = true;
    }
    setDisplay(newdis);
    setCount(count + 1);
  };

  const loadProject = async () => {
    try {
      console.log("/project/" + project);
      const resp = await http.get("/project/" + project);
      setTables(resp.data.tables);
      const pinfo = resp.data;
      delete pinfo.tables;
      setinfo(pinfo);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    loadProject();
  }, []);

  useEffect(() => {}, [info, tables, count]);

  return (
    <div className="tables">
      <div style={{ fontSize: "larger", fontWeight: "500", margin: "20px" }}>
        Project : {project}
      </div>
      <hr />
      <h3>Tables</h3>
      {tables.map((table) => (
        <div key={table.name}>
          <div className="table" onClick={() => handleTableToggle(table.name)}>
            {table.name}
          </div>
          <div
            className={
              "tabledetails " + (display[table.name] ? "" : "tablehide")
            }
          >
            {table.name} Schema:
            <pre>{JSON.stringify(JSON.parse(table.schema), null, 4)}</pre>
          </div>
        </div>
      ))}
      <br />
      <br />
      <Link to={`/createtable/${project}`} className="link">
        Create New Table
      </Link>
    </div>
  );
};

export default Project;
