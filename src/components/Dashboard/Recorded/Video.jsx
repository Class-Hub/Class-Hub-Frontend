import React from 'react';

const Video = ({ video }) => {
  return (
    <div className="videoWrapper" id={video.video_path}>
      <img src={video.thumbnail_path} alt={video.uploader_name} />
      <h4>{video.upload_title}</h4>
      <p>{video.uploader_name}</p>
    </div>
  );
};

export default Video;
