import React, { Component } from 'react';
import axios from 'axios';
import { Message } from 'semantic-ui-react';
import { connect } from 'react-redux';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      name: '',
      email: '',
      message: ''
    });

    axios
      .post('/contact/sendMessage', {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
      .then(function(response) {
        alert('Message Sent!');
        console.log(response);
        this.setState({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div class='contact-form'>
        <form>
          {/* Name field */}
          <div class='field'>
            <label class='label'>Name</label>
            <div class='control'>
              <input
                class='input is-success'
                type='text'
                name='name'
                placeholder='e.g Ross Poldark'
                onChange={this.handleChange}
                value={this.state.name}
              ></input>
            </div>
          </div>

          {/* Email field */}
          <div class='field'>
            <label class='label'>Email</label>
            <div class='control'>
              <input
                class='input is-success'
                type='text'
                name='email'
                placeholder='rosspoldark@pbs.com'
                onChange={this.handleChange}
                value={this.state.email}
              ></input>
            </div>
          </div>

          {/* Message field */}
          <div class='field'>
            <label class='label'>Message</label>
            <div class='control'>
              <textarea
                name='message'
                class='textarea is-success'
                placeholder='My dearest produce..'
                onChange={this.handleChange}
                value={this.state.message}
              ></textarea>
            </div>
          </div>

          {/* Buttons */}
          <div class='control'>
            <div class='button-area'>
              <button onClick={this.handleSubmit} class='button is-success'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(ContactForm);
