import React from 'react'
import ContactForm from '../components/ContactForm'


function Contact() {
    return ( 
<<<<<<< HEAD
        <section class = "section is-medium" >
        <div class = "container" >
        <h1 class = "title" > Contact Page </h1> 
        <h2 class = "subtitle" >
        4202 Weedlings Dr. < br / >
        Windhelm, Einsedeln 28932 < br / >
        +5(341) 432 - 2432 </h2> 
        </div> 
=======
        <section class = "section is-small">
            <div class = "container">
            <h1 class = "title">Contact</h1> 
            {/* <h2 class = "subtitle" >
                4202 Weedlings Dr. < br / >
                Windhelm, Einsedeln 28932 < br / >
                +5(342) 432 - 2432 
            </h2>  */}
            <h2 class = "subtitle"> Send us a message! </h2>
            </div> 

            <section class="hero">
            <div class="hero-body">
                <div class="columns is-centered">
                <div class="column is-one-third">
                    <ContactForm />
                </div>
                </div>
            </div>
        </section>


>>>>>>> feature: creating base ui for login / signup pages and formatting code
        </section>
    )
}

export default Contact