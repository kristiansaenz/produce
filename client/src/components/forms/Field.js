import React from "react";

const Field = props => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input
          className="input"
          type="text"
          name={props.name}
          onChange={props.handleChange}
          value={props.value}
        />
      </div>
    </div>
  );
};

export default Field;
