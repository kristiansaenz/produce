import React from 'react'
import ContactForm from '../components/ContactForm'
import Garden from '../images/garden-fam.jpg'


function Contact() {
    return (
        <section class = "section is-small is-form-page">
            {/* <div class = "container">
                <div class="form-titles">
                    <h1 class = "title">Contact</h1> 
                    <h2 class = "subtitle"> Send us a message! </h2>
                </div>
            </div>  */}

            {/* <section class="hero">
            <div class="hero-body"> */}
                <div class="columns">
                <div class="column is-one-third">
                    <div class = "container">
                        <div class="form-titles">
                            <h1 class = "title">Contact</h1> 
                            <h2 class = "subtitle"> Send us a message! </h2>
                        </div>
                    </div> 
                    <ContactForm />
                </div>
                <div class="column is-backdrop">
                    {/* <figure class="image is-4by5">
                        <img src={Garden} id="form-image"></img>  
                    </figure>  */}
                </div>
                </div>
            {/* </div>
            </section> */}
        </section>
    )
}

export default Contact