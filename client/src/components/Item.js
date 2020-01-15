import React from 'react';
import ProduceIcon from './ProduceIcon';

function Item(props) {
  return (
    <div className='produce-card'>
      <div className='title is-5 produce-card-category'>
        {props.produce.category}
      </div>
      <div className='columns is-mobile'>
        {props.produce &&
          props.produce.items.map(food => (
            <div className='column is-equal-height is-one-quarter-tablet is-2-desktop'>
              <div className='produce-box'>
                <ProduceIcon food={food} />
              </div>
            </div>
          ))}
      </div>
      <br />
    </div>
  );
}

export default Item;
