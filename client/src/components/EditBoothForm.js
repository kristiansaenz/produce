import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Field from "../components/forms/Field";
import TextAreaField from "./forms/TextAreaField";
import SubmitButton from "./forms/SubmitButton";
import AddItemField from "./forms/AddItemField";
import useForm from "./forms/useForm";
import AddItemBoxList from "./produce/AddItemBoxList";

function EditBoothForm(props) {
  const { values, handleChange, handleSubmit } = useForm(updateBooth);
  const [addItemClicked, setAddItemClicked] = useState(false);
  const [ItemBoxList, setItemBoxList] = useState([]);
  const [items, updateItems] = useState([]);

  function updateBooth() {
    axios
      .patch(`/booths/${props.user.booth}`, {
        booth_name: values.boothName,
        description: values.description,
        // produce: items
      })
      .then(response => {
        console.log(response);
      });
  }

  const handleAddItemBox = () => {
    setItemBoxList([
      ...ItemBoxList.concat({
        id: Math.random()
      })
    ]);
  };

  const handleDeleteItemBox = id => {
    setItemBoxList(ItemBoxList =>
      ItemBoxList.filter(itemBox => itemBox.id !== id)
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field
          label="Booth Name"
          name="boothName"
          value={values.boothName || ""}
          handleChange={handleChange}
        />
        <TextAreaField
          label="Description"
          name="description"
          value={values.description || ""}
          handleChange={handleChange}
        />
        <AddItemField label="Add Items" handleAddItemClick={handleAddItemBox} />
        <AddItemBoxList
          itemBoxList={ItemBoxList}
          handleDeleteItemBox={handleDeleteItemBox}
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
