import React from 'react'
import LoginModal from '../components/LoginModal';


function Login() {
    return(
        <section class="section is-small">
        <div class="container">
        <h1 class="title">Login Page</h1>
        <h2 class="subtitle">
            Here you can login/signup to become a farmer & create your booth!
        </h2>

        <div class="columns is-centered">
            <div class="column is-one-third">
                <LoginModal />
            </div>
        </div>

        </div>
    </section>
    )
}

export default Login