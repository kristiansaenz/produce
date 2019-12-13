import React, { useState } from 'react'
import { addReview } from '../../actions/selectedBoothAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AddReview = (props) => {

  const [value, setValue] = useState('')

  const handleSubmit = () => {
    props.addReview(props.user._id, props.user.name, props.user.avatar, value, props.booth_id);
    setValue('')
  }

  if(props.isAuthenticated) {
    return (
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src={props.user.avatar} alt="avatar"></img>
            <sm>{props.user.name}</sm>
          </p>
        </figure>
        <div class="media-content">
          <div class="field">
            <p class="control">
              <form>
                <textarea
                  class="textarea"
                  placeholder="Add a comment..."
                  value={value}
                  onChange={e => setValue(e.target.value)}
                ></textarea>
              </form>
            </p>
          </div>
          <nav class="level">
            <div class="level-left">
              <div class="level-item">
                <a class="button is-info" onClick={handleSubmit}>Submit</a>
              </div>
            </div>
          </nav>
        </div>
      </article>
    );
  } else {
    return (
      <Link to={`/login`}>
        <div>Login to Add Review!</div>
      </Link>
    )
  }
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
})

export default connect(mapStateToProps, { addReview })(AddReview);
