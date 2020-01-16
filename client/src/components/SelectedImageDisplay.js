import React from 'react';

const SelectedImageDisplay = props => {
  return props.images.map(image => {
    return (
      <div>
        <img src={image} />
      </div>
    );
  });
};

export default SelectedImageDisplay;
