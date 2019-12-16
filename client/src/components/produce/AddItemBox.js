import React from "react";
import { Dropdown } from "semantic-ui-react";

const AddItemBox = props => {
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
        <nav className="level">
          <div className="level-left category-dropdown">
            <Dropdown
              placeholder="Select Category"
              fluid
              selection
              options={itemCategories}
            />
          </div>
          <div className="level-right">
            <a class="delete delete-item-box-button" onClick={() => props.handleDeleteItemBox(props.id)}></a>
          </div>
        </nav>
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
