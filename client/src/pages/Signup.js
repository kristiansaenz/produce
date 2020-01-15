import React from 'react';
import SignupForm from '../components/SignupForm';

function Signup() {
  return (
    <section className='section is-small'>
      <section className='hero'>
        <div className='hero-body'>
          <div className='columns'>
            <div className='form-titles'>
              <h1 className='title'>Sign Up</h1>
              <h2 className='subtitle'>
                Here you can sign up to become a farmer & create your booth!
              </h2>
            </div>
          </div>
          <div className='columns'>
            <div className='column is-one-third'>
              <SignupForm />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Signup;
