import React from 'react';

const ProduceIcon = props => {
  return props.food ? (
    <div>
      <img
        src={require(`../images/produce-icons/${props.food}.svg`)}
        className='produce-icon'
        alt={props.food}
      />
      {props.food}
    </div>
  ) : null;
};

export default ProduceIcon;
