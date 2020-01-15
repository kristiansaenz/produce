import React from 'react';
import AddItemBox from './AddItemBox';

const AddItemBoxList = props => {
  return props.itemBoxList.map(itemBox => (
    <AddItemBox
      key={itemBox.id}
      id={itemBox.id}
      handleDeleteItemBox={props.handleDeleteItemBox}
    />
  ));
};

export default AddItemBoxList;
