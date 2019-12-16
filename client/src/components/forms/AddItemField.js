import React from "react";

const AddItemField = props => {
  return (
    <div className="field add-item-field">
      <label className="label add-item-label">{props.label}</label>
      <div className="button" onClick={props.handleAddItemClick}>
        <span className="icon is-small">
          <i className="fas fa-plus"></i>
        </span>
      </div>
    </div>
  );
};

export default AddItemField;
