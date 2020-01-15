import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ImageUploader from '../components/ImageUploader';
import EditProfileForm from '../components/EditProfileForm';

class Profile extends Component {
  render() {
    if (this.props.isAuthenticated) {
      return (
        <section className='section is-small'>
          <section className='hero'>
            <div className='hero-body'>
              <div className='columns is-centered'>
                <div className='column is-one-third'>
                  <h1 className='title'>Hello {this.props.user.name}</h1>
                  <br />
                  {/* <img src={this.props.user.avatar} alt="avatar" /> */}
                  <ImageUploader
                    user={this.props.user.email}
                    avatar={this.props.user.avatar}
                  />
                  <br />
                  <EditProfileForm user={this.props.user} />
                </div>
              </div>
            </div>
          </section>
        </section>
      );
    } else {
      return <Redirect to='/login' />;
    }
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps)(Profile);
