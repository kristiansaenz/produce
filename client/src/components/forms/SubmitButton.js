import React from "react";

const SubmitButton = props => {
  return (
    <div class="control">
      <div class="button-area">
        <button class="button is-success" type="submit">
          {props.label}
        </button>
      </div>
    </div>
  );
};

export default SubmitButton;
