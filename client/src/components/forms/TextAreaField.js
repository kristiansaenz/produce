import React from "react";

const TextAreaField = props => {
  return (
    <div class="field">
      <label class="label">{props.label}</label>
      <p class="control">
        <textarea
          class="textarea is-success"
          name={props.name}
          value={props.value}
          onChange={props.handleChange}
        ></textarea>
      </p>
    </div>
  );
};

export default TextAreaField;
