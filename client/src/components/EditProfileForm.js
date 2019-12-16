import React, { useState, useEffect } from "react";
import Field from "./forms/Field";
import SubmitButton from "./forms/SubmitButton";
import useForm from "./forms/useForm";
import axios from "axios";

function EditProfileForm(props) {
  const { values, handleChange, handleSubmit } = useForm(updateProfile);
  const [update, setUpdate] = useState(false);

  function updateProfile() {
    axios.patch(`/users/${props.user._id}`, {
      name: values.name,
      email: values.email
    })
    .then(response => {
      console.log(response)
      setUpdate(true);
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field
          label="Name"
          name="name"
          value={values.name != undefined ? values.name : props.user.name}
          handleChange={handleChange}
        />
        <Field
          label="Email"
          name="email"
          value={values.email != undefined ? values.email : props.user.email}
          handleChange={handleChange}
        />
        {/* <Field
          label="Password"
          name="password"
          value="cant change this now"
          handleChange={handleChange}
        />
        <Field
          label="Confirm Password"
          name="confirmPassword"
          value="cant change this now"
          handleChange={handleChange}
        /> */}
        <SubmitButton label="Save Changes" />
      </form>
    </div>
  );
}

export default EditProfileForm;
