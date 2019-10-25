import React from 'react'


class Item extends React.Component {

    render() {
        return(
            <div class = "column is-half-mobile is-one-quarter-tablet is-one-fifth-desktop">
                <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                    <img src="https://www.organicfacts.net/wp-content/uploads/storecarrots.jpg" alt="Placeholder image"></img>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                    <div class="subtitle">Curly Carrots</div>
                    <p>
                    Ripe orange carrots Kuzco helped me plant. Very delicious for the emperor!
                    </p>
                    <br/>
                    <p>$3</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Item