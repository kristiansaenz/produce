import React from 'react'
import LoginForm from '../components/LoginForm';


function Login() {
    return(
        <section class="section is-small">
        <div class="container">
            <div class="form-titles">
                <h1 class="title">Login</h1>
                <h2 class="subtitle">
                    Here you can login to your booth!
                </h2>
            </div>
        </div>

        <section class="hero">
        <div class="hero-body">
            <div class="columns">
            <div class="column is-one-third">
                <LoginForm />
            </div>
            </div>
        </div>
        </section>
        </section>
    )
}

export default Login