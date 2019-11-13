import React from "react";

function FilterByCategory(props) {
  return (
    <div className="categories">
      {props.categoryList.map(category => (
        <label className="checkbox">
          <input type="checkbox" key={category.id} />
          {category.name}
        </label>
      ))}
    </div>
  );
}

export default FilterByCategory;
