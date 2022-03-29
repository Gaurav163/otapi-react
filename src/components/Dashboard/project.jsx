import React, { useState, useEffect } from "react";
import "./style.scss";

const Project = () => {
  let [count, setCount] = useState(0);
  let [display, setDisplay] = useState({});
  let [tables, setTables] = useState([
    {
      name: "users",
      schema: { name: { type: "String", default: "Gaurav" }, class: "Number" },
    },
    { name: "blogs" },
  ]);
  const handleTableToggle = (name) => {
    let newdis = display;
    if (display[name] === true) {
      newdis[name] = false;
    } else {
      newdis[name] = true;
    }
    setDisplay(newdis);
    console.log(newdis);
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("wow");
  }, [count]);
  return (
    <div className="tables">
      <h2>Project </h2>
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
            <pre>{JSON.stringify(table.schema, null, 4)}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
