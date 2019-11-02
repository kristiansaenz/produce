import React from 'react'
import Item from './Item'

class ItemList extends React.Component {

  render() {
    let produce = this.props.produce;

    return (
      <div className="container">
        {this.props.produce && produce.map(item =>
          <Item produce={item} />
        )}
      </div>
    )
  }
}

export default ItemList