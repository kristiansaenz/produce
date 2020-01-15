import React from 'react';

const SelectedImageDisplay = props => {
  if (props.images.length > 0) {
    props.images.map(image => {
      return (
        <div>
          <img src={image} />
        </div>
      );
    });
  } else {
    return <p>Images will go here.</p>;
  }
};

export default SelectedImageDisplay;
