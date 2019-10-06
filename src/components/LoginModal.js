import React from 'react'


class LoginModal extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                email: '',
                password: ''
            }
        }

        myChangeHandler = (event) => {
            this.setState({
                email: event.target.value,
                password: event.target.value
            })
        }

        render() {
            return(
                <form>
                <h1>Hello {this.state.email}. Your password is {this.state.password}</h1>
                <p>Enter your email:</p>
                <input
                    type='text'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your password:</p>
                <input
                    type='text'
                    onChange={this.myChangeHandler}
                />
                </form>
            )
        }
}

export default LoginModal