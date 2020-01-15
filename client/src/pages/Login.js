import React from 'react';
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <section className='section is-small'>
      <section className='hero'>
        <div className='hero-body'>
          <div className='columns'>
            <div className='form-titles'>
              <h1 className='title'>Login</h1>
              <h2 className='subtitle'>Here you can login to your booth!</h2>
            </div>
          </div>
          <div className='columns'>
            <div className='column is-one-third'>
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Login;
