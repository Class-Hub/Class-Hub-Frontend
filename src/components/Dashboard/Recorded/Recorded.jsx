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
        console.log(response.data);
        setVideos(response.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="recordedWrapper">
      <h3>Recorded Lectures</h3>
      <hr />
      <div className="allVideo">
        {videos &&
          videos.map(video => (
            <Link to={`RecordedLectures/${video.upload_title}`}>
              <Video key={video._id} video={video} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Recorded;
