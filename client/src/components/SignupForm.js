import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


class LoginForm extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                email: '',
                password: ''
            }
        }

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

                    {/* Confirm password field */}
                    <div class="field">
                    <label class="label">Confirm Password</label>
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
                    <div class="control">
                    <div class="button-area">
                        <button class="button is-success">Submit</button>
                    </div>
                    </div>

                </form>
                </div>
            )
        }
}

export default LoginForm