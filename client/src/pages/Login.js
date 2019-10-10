import React from 'react'
import LoginForm from '../components/LoginForm';


function Login() {
    return(
        <section class="section is-small">
        <div class="container">
            <h1 class="title">Login</h1>
            <h2 class="subtitle">
                Here you can login/signup to become a farmer & create your booth!
            </h2>
        </div>

        <section class="hero">
        <div class="hero-body">
            <div class="columns is-centered">
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