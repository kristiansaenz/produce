/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Farmer from '../images/farmerIllustrations.png'
import Farm from '../images/produce-graphic-test.svg'


function Home() {
    return ( 
            <section class = "section is-small">
                <div class="container">
                {/* <h1 class="title"> Welcome to Produce </h1>  
                <h2 class="subtitle"> Get homemade goods/produce in your neighborhood :-) </h2>   */}
                {/* <div class="columns is-centered">
                    <div class="column"> */}
                    {/* <figure class="image is-3by1"> */}
                        <img id="farm" src={Farm}></img>  
                    {/* </figure>   */}
                    {/* </div>
                </div> */}
                </div>

            </section>
    )
}

export default Home