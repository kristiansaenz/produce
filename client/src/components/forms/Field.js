import React from "react";

const Field = props => {
  return (
    <div class="field">
      <label class="label">{props.label}</label>
      <div class="control">
        <input
          class="input is-success"
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
