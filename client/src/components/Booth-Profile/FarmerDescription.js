import React from 'react';
import ProfileMap from '../ProfileMap';

function FarmerDescription(props) {
  return (
    <div class='farmer-description'>
      <div className='info'>
        <div className='subtitle'> Description </div>
        <p>{props.description}</p>
      </div>
      <br />
      <div className='hours'>
        <div className='subtitle'> Hours </div>
        <p>Monday - Friday: 12pm - 3pm</p>
      </div>
      <br />
      <div className='booth-map'>
        {props.booth.address && <ProfileMap booths={props.booth} />}
      </div>
    </div>
  );
}

export default FarmerDescription;
