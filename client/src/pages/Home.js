/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Farmer from '../images/produce-display.svg'


function Home() {
    return (
            <div class="homepage">
                {/* <div class="home-section">
                <section class = "section is-small">
                    <h1 class="title"> Welcome to Produce </h1>  
                    <h2 class="subtitle"> Get homemade goods/produce in your neighborhood :-) </h2>
                </section>
                </div> */}

                <div class="homepage-image">
                    <section class = "section is-small">
                        <div class="container">
                        <div class="columns is-centered">

                            <div class="column">
                            <figure class="image is-5x3">
                                <img src={Farmer}></img>  
                            </figure>  
                            </div>
                        </div>
                        </div>
                    </section>
                </div>
            </div>

    )
}

export default Home