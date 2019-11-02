import React, { Component } from 'react'
import axios from 'axios'

class ImageUploader extends Component {

  state = {
    file: null,
  }

  onFormSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage', this.state.file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    axios.post("/upload", formData, config)
      .then((response) => {
        alert("The file is successfully uploaded");
      }).catch((error) => {
      });
  }
  onChange = e => {
    this.setState({ file: e.target.files[0] });
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" name="profile-picture" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
    );
  }

}

export default ImageUploader

