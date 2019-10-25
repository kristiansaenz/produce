import React from 'react'
import ContactForm from '../components/ContactForm'


function Contact() {
    return (
        <section class = "section is-small">
            <div class = "container">
            <h1 class = "title">Contact</h1> 
            <h2 class = "subtitle"> Send us a message! </h2>
            </div> 

            <section class="hero">
            <div class="hero-body">
                <div class="columns">
                <div class="column is-one-third">
                    <ContactForm />
                </div>
                </div>
            </div>
            </section>
        </section>
    )
}

export default Contact