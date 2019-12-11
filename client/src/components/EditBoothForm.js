import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Field from "../components/forms/Field";
import TextAreaField from "./forms/TextAreaField";
import SubmitButton from "./forms/SubmitButton";

function EditBoothForm(props) {
  const [state, setState] = useState({
    boothName: "",
    description: ""
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  const handleSubmit = async event => {
    event.preventDefault();
    console.log("submitting ", props.user.booth);
    const boothUpdate = await axios.patch(`/booths/${props.user.booth}`, {
      booth_name: state.boothName,
      description: state.description
    });
    console.log(boothUpdate.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field
          label="Booth Name"
          name="boothName"
          value={state.boothName}
          handleChange={handleChange}
        />
        <TextAreaField
          label="Description"
          name="description"
          value={state.description}
          handleChange={handleChange}
        />
        <SubmitButton label="Save Changes" />
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(EditBoothForm);
