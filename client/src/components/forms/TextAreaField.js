import React from 'react';

const TextAreaField = props => {
  return (
    <div className='field'>
      <label className='label'>{props.label}</label>
      <p className='control'>
        <textarea
          className='textarea'
          name={props.name}
          value={props.value}
          onChange={props.handleChange}
        ></textarea>
      </p>
    </div>
  );
};

export default TextAreaField;
