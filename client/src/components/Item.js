import React from 'react'


function Item(props) {
    return (
        <div className="produce-card">
              <div class="subtitle">{props.produce.category}</div>
              <div className="columns is-mobile">
              {props.produce && props.produce.items.map(food =>
                  <div className="column is-equal-height is-half-mobile is-one-quarter-tablet is-2-desktop">
                    <div className="produce-box">
                        <p>{food}</p>
                    </div>
                  </div>
              )}
              </div>
              <br />
        </div>
    )
}


export default Item