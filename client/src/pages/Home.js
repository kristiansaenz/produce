/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Farmer from '../images/farmerIllustrations.png'


function Home() {
    return ( 
            <section class = "section is-small">
                <div class = "container" >
                <h1 class = "title"> Welcome to Produce </h1>  
                <h2 class = "subtitle"> Get homemade goods/produce in your neighborhood :-) </h2>  
                <div class="columns is-centered">
                    <div class="column is-one-third">
                    <figure class = "image is-5x3" >
                        <img src ={Farmer}></img>  
                    </figure>  
                    </div>
                </div>
                </div>
            </section>
    )
}

export default Home