import React, { useEffect, useState } from "react";
import "./create.scss";

const CreateTable = () => {
  const [schema, setSchema] = useState({});
  let [list, setList] = useState([]);
  let [name, setName] = useState("");
  let [count, setCount] = useState(0);
  const handleNameChange = (e) => {
    setName(e.target.value);
    setCount(count + 1);
  };
  const handleAddColumn = () => {
    if (name === "") {
      console.log("name required");
    } else {
      if (schema[name]) {
        console.log("column already exist", name, schema);
      } else {
        let newColumn = {
          type: "String",
          required: false,
          unique: false,
        };
        const newSchema = schema;
        newSchema[name] = newColumn;
        setSchema(newSchema);
        let newList = list;
        newList.push(name);
        setList(newList);
        setName("");
        setCount(count + 1);

        console.log(schema, list);
      }
    }
  };
  useEffect(() => {}, [count]);
  return (
    <div>
      <div className="createtable">
        <h1> Create new table here </h1>
        <label htmlFor="name">Table</label>
        <input type="text" id="name"></input>
        <br />
        <hr />
        Columns
        {list.map((col) => (
          <div key={col} className="column">
            <span>Name: </span>
            <input type="text" className="width-s" value={col} readOnly />
            <span> Type: </span>
            <select className="width-s">
              <option value="String">String</option>
              <option value="Number">Number</option>
              <option value="Boolean">Boolean</option>
              <option value="Object">Object</option>
            </select>
            <span> Required: </span>
            <select className="width-s">
              <option value="false">false</option>
              <option value="true">true</option>
            </select>
          </div>
        ))}
        <br />
        <input
          className="width-m"
          value={name}
          onChange={(e) => handleNameChange(e)}
        ></input>
        <button className="width-m" onClick={() => handleAddColumn()}>
          Add column
        </button>
        <hr />
        <button className="width-m">Create Table</button>
      </div>
    </div>
  );
};

export default CreateTable;
