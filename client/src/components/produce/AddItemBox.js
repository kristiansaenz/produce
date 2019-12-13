import React from "react";
import { Dropdown } from "semantic-ui-react";

const AddItemBox = () => {
  const itemCategories = [
    { key: "fruit", text: "Fruit", value: "fruit" },
    { key: "vegetables", text: "Vegetables", value: "vegetables" }
  ];

  const fruitItems = [
    { key: "apples", text: "Apples", value: "apples" },
    { key: "bananas", text: "Bananas", value: "bananas" },
    { key: "strawberries", text: "Strawberries", value: "strawberries" }
  ];

  return (
    <div className="add-item-box is-shadow-box">
      <div className="category-dropdown-section">
        {/* <div className="category-dropdown"> */}
        <Dropdown
          placeholder="Select Category"
          fluid
          selection
          options={itemCategories}
        />
        {/* </div> */}
        <a class="delete"></a>
      </div>
      <div className="item-dropdown">
        <Dropdown
          placeholder="Select Fruit"
          fluid
          multiple
          selection
          options={fruitItems}
        />
      </div>
    </div>
  );
};

export default AddItemBox;
