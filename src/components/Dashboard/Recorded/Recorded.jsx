import axios from 'axios';
import '../../../styles/Dashboard/Recorded.scss';
import React, { useEffect, useState } from 'react';
import Video from './Video';
import { Link } from 'react-router-dom';

const Recorded = () => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    axios
      .get('/videoList')
      .then(response => {
        // console.log(response.data);
        setVideos(response.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="wrapper">
      <div className="recordedWrapper">
        <h3>Recorded Lectures</h3>
        <hr />
        <div
          className={
            !videos
              ? 'allVideo d-flex align-items-center justify-content-center'
              : 'allVideo'
          }
        >
          {!videos && (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          {videos &&
            videos.map(video => (
              <Link
                key={video._id}
                to={`RecordedLectures/${video.upload_title}`}
              >
                <Video video={video} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Recorded;
