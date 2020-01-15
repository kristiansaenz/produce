import React, { Component } from 'react';
import axios from 'axios';
import SelectedImageDisplay from './SelectedImageDisplay';

class MultipleImageUploader extends Component {
  state = {
    images: [],
    selectedFiles: null
  };

  onImageChange = event => {
    this.multipleFileChangedHandler(event);
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        this.setState({
          images: [...this.state.images, e.target.result]
        });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  multipleFileChangedHandler = event => {
    this.setState({
      selectedFiles: event.target.files
    });
    console.log(event.target.files);
  };

  multipleFileUploadHandler = () => {
    const data = new FormData();
    let selectedFiles = this.state.selectedFiles;
    // If file selected
    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        data.append('galleryImage', selectedFiles[i], selectedFiles[i].name);
      }
      axios
        .post('/booths/upload-images', data, {
          headers: {
            accept: 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`
          }
        })
        .then(response => {
          console.log('res', response);
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.error) {
              if ('LIMIT_FILE_SIZE' === response.data.error.code) {
                alert('Max size: 2MB');
              } else if ('LIMIT_UNEXPECTED_FILE' === response.data.error.code) {
                alert('Max 4 images allowed');
              } else {
                // If not the given ile type
                alert(response.data.error);
              }
            } else {
              // Success
              let fileName = response.data;
              console.log('fileName', fileName);
              alert('Files Uploaded');
            }
          }
        })
        .catch(error => {
          // If another error
          alert(error, 'Line 54');
        });
    } else {
      // if file not selected throw error
      alert('Please select file');
    }
  };

  render() {
    return (
      <div>
        {/* Multiple File Upload */}
        <SelectedImageDisplay images={this.state.images} />;
        <div
          className='card border-light mb-3'
          style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}
        >
          <div className='card-body'>
            <input type='file' multiple onChange={this.onImageChange} />
            <div className='mt-5'>
              <button
                className='btn btn-info'
                onClick={this.multipleFileUploadHandler}
              >
                Upload!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MultipleImageUploader;
