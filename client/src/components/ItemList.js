import React from 'react'
import Item from './Item'


class ItemList extends React.Component {

  render(){
      let items = this.props.items;
      // let itemsList = items.split(" ");
      // var itemsList = items.map(item => ({ name: item }));
      console.log(items)

      return (
        <div className="columns is-mobile">
        {this.props.items && items.map(item =>
          <Item item={item} />
        )}        
        </div>
      )
  }
}
export default ItemList