import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import MultipleImageUploader from './MultipleImageUploader'
import axios from 'axios'

function EditBooth(props) {

  const [state, setState] = useState({
    boothName:'',
    description: ''
  })


  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('submitting ', props.user.booth)
    const boothUpdate = await axios.patch(`/booths/${props.user.booth}`, {
      booth_name: state.boothName,
      description: state.description
    })
    console.log(boothUpdate.data)
  }

  if(props.isAuthenticated) {
    return(
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Booth Name:
            <input name="boothName" type="text" value={state.boothName} onChange={handleChange}/>
          </label>
          <label>
            Description:
            <textarea name="description"value={state.description} onChange={handleChange} />
          </label>
          <input type="submit" value="Save Changes" />
        </form>
        <MultipleImageUploader />
      </div>
    )
  } else {
    return(
      <Redirect to="/login" />
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(EditBooth)