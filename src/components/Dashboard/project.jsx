import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import http from "../../services/http";
import { Add, Remove } from "@mui/icons-material";
import Access from "./tableaccess";
import "./style.scss";

const Project = () => {
  let [count, setCount] = useState(0);
  let [display, setDisplay] = useState({});
  let [info, setinfo] = useState({});
  let [open, setOpen] = useState(true);
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
      const pinfo = { ...resp.data };
      delete pinfo.tables;
      setinfo(pinfo);
      setTables(resp.data.tables);

      setCount(count + 1);

      setOpen(false);
    } catch (error) {
      console.log(error.response);
      setOpen(false);
    }
  };

  useEffect(() => {
    loadProject();
  }, []);

  useEffect(() => {}, [count]);

  return (
    <div className="tables">
      <div
        style={{
          fontSize: "x-large",
          fontWeight: "500",
          margin: "20px",
          textAlign: "center",
        }}
      >
        Project - "{project}"
      </div>
      Key : {info.key}
      <hr />
      <div style={{ fontSize: "large", fontWeight: "500" }}>Tables</div>
      {tables.map((table) => (
        <div key={table.name}>
          <div className="table" onClick={() => handleTableToggle(table.name)}>
            <div>{table.name}</div>
            <div>{display[table.name] ? <Remove /> : <Add />}</div>
          </div>
          <div
            className={
              "tabledetails " + (display[table.name] ? "" : "tablehide")
            }
          >
            {table.name}.schema:
            <pre>{JSON.stringify(JSON.parse(table.schema), null, 4)}</pre>
            <Access info={info} table={table} loadproject={loadProject} />
          </div>
        </div>
      ))}
      <br />
      <br />
      <Link to={`/createtable/${project}`} className="link">
        Create New Table
      </Link>
      <br />
      <br />
      <br />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Project;
