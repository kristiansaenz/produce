import React, { Component } from 'react'
import axios from 'axios'

class ImageUploader extends Component {

  state = {
    selectedFile: null,
  }

  singleFileChangedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  singleFileUploadHandler = () => {
    const data = new FormData();
    // If file selected
    if (this.state.selectedFile) {
      data.append('profileImage', this.state.selectedFile, this.state.selectedFile.name);
      axios.post('/users/upload-avatar', data, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        }
      })
        .then((response) => {
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
            }
          }
        }).catch((error) => {
          // If another error
          alert(error);
        });
    } else {
      // if file not selected throw error
      alert('Please upload file');
    }
  };

  render() {
    return(
      <div>
        <h1>File Upload</h1>
        <input type="file" onChange={this.singleFileChangedHandler}/>
        <button onClick={this.singleFileUploadHandler}>Upload!</button>
      </div>
    );
  }

}

export default ImageUploader

