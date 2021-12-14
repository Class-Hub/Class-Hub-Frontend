import React from 'react';
import '../../../styles/Dashboard/Player.scss';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Player = () => {
  const { videoId } = useParams();
  // console.log(videoId);
  return (
    <div className="wrapper">
      <Link to={`/RecordedLectures`}>
        <svg
          width="40"
          height="40"
          className="back"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.6667 20H8.33333"
            stroke="#14279B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 31.6666L8.33333 20L20 8.33331"
            stroke="#14279B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Go Back
      </Link>
      <div className="playerWrapper">
        <ReactPlayer
          width="85%"
          height="auto"
          controls
          url={`http://localhost:8000/videos/${videoId}`}
        />
      </div>
    </div>
  );
};

export default Player;
