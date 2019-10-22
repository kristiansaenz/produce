import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


class LoginForm extends React.Component {
            state = {
                email: '',
                password: ''
            }

        // updateEmail(value) {
        //     this.setState({
        //         email: event.target.value
        //     })
        // }

        // updatePassword(value) {
        //     this.setState({
        //         password: event.target.value
        //     })
        // }

        render() {
            return(
                <div class="login-form">
                <form>
                    
                    {/* Email field */}
                    <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input 
                        class="input is-success" 
                        type="text" 
                        placeholder="e.g Demelza Carne"
                        // onChange={(event) => {this.updateEmail(event.target.value)}}
                        value={this.state.email} />
                    </div>
                    </div>

                    {/* Password field */}
                    <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input 
                        class="input is-success" 
                        type="text" 
                        placeholder="e.g judas"
                        // onChange={(event) => {this.updatePassword(event.target.value)}}
                        value={this.state.password} />
                    </div>
                    </div>

                    {/* Buttons */}
                    <div class="field is-grouped is-grouped-centered">
                        <p class="control">
                            <a class="button is-success">Submit</a>
                        </p>
                        <p class="control">
                            <Link to="/signup"><button class="button is-light">Sign Up</button></Link>
                        </p>
                    </div>

                </form>
                </div>
            )
        }
}

export default LoginForm