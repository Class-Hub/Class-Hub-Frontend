import axios from 'axios';
import React, { useState } from 'react';
import '../../../styles/Dashboard/Upload.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from '../../../context/User.context';

const Upload = () => {
  const { user } = useUser();
  const [state, setState] = useState({
    selectedVideos: null,
    loaded: 0,
    subName: '',
    _id:''
  });

  const maxSelectFile = event => {
    let files = event.target.files;
    if (files.length > 1) {
      toast.error('Maximum 1 file is allowed');
      event.target.value = null;
      return false;
    } else {
      let err = '';
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > 15242880000) {
          // 1.5 GB
          err += files[i].name + ', ';
        }
      }
      if (err !== '') {
        // error caught
        event.target.value = null;
        toast.error(err + ' is/are too large. Please select file size < 1.5Gb');
      }
    }
    return true;
  };

  const fileChangeHandler = event => {
    const files = event.target.files;
    if (maxSelectFile(event)) {
      setState({
        ...state,
        selectedVideos: files,
        loaded: 0,
      });
    }
  };

  const fileUploadHandler = e => {
    e.preventDefault();
    // console.log('ujjwal vide', state.selectedVideos);
    if (!state.selectedVideos) {
      alert('Please Uplaod the Video');
      return;
    }

    const data = new FormData();
    // console.log('ujjwal subname', state.subName);
    for (let i = 0; i < state.selectedVideos.length; i++) {
      data.append('file', state.selectedVideos[i]);
    }

    axios
      .post('/upload', data, {
        headers: {
          'Content-Type': 'application/json',
          uploader_name: user.name,
          subName: state.subName,
          subject: state._id,
          Authorization: 'Bearer ' + localStorage.getItem('classHub'),
        },
        onUploadProgress: ProgressEvent => {
          setState({
            ...state,
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
          });
        },
      })
      .then(res => {
        toast.success('Upload Successful');
      })
      .catch(err => {
        toast.error(`Upload Fail with status: ${err.statusText}`);
      });
  };

  console.log('ujjwal subName', state);
  return (
    <div className="wrapper">
      <div className="uploadContainer">
        <ToastContainer />
        <h4>Upload Video</h4>
        <hr />
        <div id="uploadForm">
          <div>
            {user?.role === 'admin' &&
              user?.teachingSubs.map(subject => {
                return (
                  <div key={subject._id}>
                    <input
                      type="radio"
                      name="subjects"
                      value={subject.subName}
                      onChange={e =>
                        setState({ ...state, subName: e.target.value,_id: subject.sub })
                      }
                    />
                    {subject.subName}
                  </div>
                );
              })}
          </div>
          <div className="inputDiv">
            <input
              type="file"
              name="file"
              multiple="multiple"
              accept="video/*"
              onChange={e => fileChangeHandler(e)}
            />
          </div>

          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${state.loaded}%` }}
              aria-valuenow={state.loaded}
            ></div>
          </div>
          <div className="uploadBottom">
            {state.loaded}% Uploaded
            <button
              type="button"
              // className="btn btn-success btn-block"
              onClick={e => fileUploadHandler(e)}
            >
              Upload Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
