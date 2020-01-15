import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditBoothForm from '../components/EditBoothForm';

class ManageBooth extends Component {
  render() {
    if (this.props.isAuthenticated) {
      return (
        <section className='section is-small'>
          <section className='hero'>
            <div className='hero-body'>
              <div className='columns is-centered'>
                <div className='column is-half'>
                  <h1 className='title'>Manage your booth</h1>
                  <br />
                  <EditBoothForm />
                </div>
              </div>
            </div>
          </section>
        </section>
      );
    } else {
      return <div>Login</div>;
    }
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps)(ManageBooth);
