import React from 'react'
import Item from './Item'


class ItemList extends React.Component {

  render(){
      let produce = this.props.produce;
      // let itemsList = items.split(" ");
      // var itemsList = items.map(item => ({ name: item }));

      return (
        <div className="columns is-mobile">
        {this.props.produce && produce.map(item =>
          <Item produce={item} />
        )}        
        </div>
      )
  }
}
export default ItemList