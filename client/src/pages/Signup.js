import React from 'react'
import SignupForm from '../components/SignupForm';


const Signup = () => {
    return(
        <section class="section is-small">
        <div class="container">
            <div class="form-titles">
                <h1 class="title">Sign Up</h1>
                <h2 class="subtitle">
                    Here you can sign up to become a farmer & create your booth!
                </h2>
            </div>
        </div>

        <section class="hero">
        <div class="hero-body">
            <div class="columns">
            <div class="column is-one-third">
                <SignupForm />
            </div>
            </div>
        </div>
        </section>
        </section>
    )
}

export default Signup