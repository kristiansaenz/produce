import React, { Component } from 'react';
import axios from 'axios';
import { loadUser } from '../actions/authActions';
import { connect } from 'react-redux';

class ImageUploader extends Component {
  state = {
    selectedFile: null,
    image: null
  };

  onImageChange = event => {
    this.singleFileChangedHandler(event);
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        this.setState({
          image: e.target.result
        });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  handleDeleteImage = () => {
    this.setState({ image: null, selectedFile: null });
  };

  singleFileChangedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  singleFileUploadHandler = () => {
    const data = new FormData();
    // If file selected
    if (this.state.selectedFile) {
      data.append(
        'profileImage',
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      axios
        .post('/users/upload-avatar', data, {
          headers: {
            accept: 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`
          },
          params: {
            user: this.props.user
          }
        })
        .then(response => {
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.error) {
              if ('LIMIT_FILE_SIZE' === response.data.error.code) {
                alert('Max size: 2MB');
              } else {
                console.log(response.data);
                // If not the given file type
                alert(response.data.error);
              }
            } else {
              // Success
              let fileName = response.data;
              console.log('fileName', fileName);
              alert('File Uploaded');
              this.props.loadUser();
            }
          }
        })
        .catch(error => {
          // If another error
          alert(error);
        });
    } else {
      // if file not selected throw error
      alert('Please upload file');
    }
  };

  render() {
    let imagePreview;

    if (this.state.image !== null) {
      imagePreview = (
        <div>
          <button onClick={this.handleDeleteImage}>Cancel</button>
          <img src={this.state.image} />
        </div>
      );
    } else {
      imagePreview = <img src={this.props.avatar} alt='avatar' />;
    }

    return (
      <div>
        {imagePreview}
        <input type='file' onChange={this.onImageChange} />
        <button onClick={this.singleFileUploadHandler}>Upload!</button>
      </div>
    );
  }
}

export default connect(null, { loadUser })(ImageUploader);
