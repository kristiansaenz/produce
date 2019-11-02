/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Farmer from '../images/produce-display.svg'


function Home() {
    return (
            <div class="homepage">
                <div class="homepage-image">
                    <section class = "section is-small">
                        <div class="container">
                            <figure class="image is-5x3">
                                <img src={Farmer}></img>  
                            </figure>  
                        </div>
                    </section>
                </div>
            </div>

    )
}

export default Home