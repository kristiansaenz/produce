import React from "react";

const SubmitButton = props => {
  return (
    <div className="control">
      <div className="button-area">
        <button className="button is-success" type="submit">
          {props.label}
        </button>
      </div>
    </div>
  );
};

export default SubmitButton;
