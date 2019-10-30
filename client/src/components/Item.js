import React from 'react'


class Item extends React.Component {

    render() {
        return(
          <div class="column is-half-mobile is-one-quarter-tablet is-one-fifth-desktop">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://www.organicfacts.net/wp-content/uploads/storecarrots.jpg" alt="Placeholder image"></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <div class="subtitle">{this.props.item.category}</div>
                  {this.props.item && this.props.item.items.map(food => 
                    <ul>
                      <li>{food}</li>
                    </ul>
                  )
                  }
                  <br />
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Item