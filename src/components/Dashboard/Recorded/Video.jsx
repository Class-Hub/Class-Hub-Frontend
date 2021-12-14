import React from 'react';

const Video = ({ video }) => {
  console.log(video)
  return (
    <div
      className="videoWrapper"
      style={{ wordBreak: 'break-all' }}
      id={video.video_path}
    >
      <div>
        <img src={video.thumbnail_path} alt={video.uploader_name} />
      </div>
      <div>
        <h4>{video.upload_title}</h4>
        <p>{video.uploader_name}</p>
      </div>
    </div>
  );
};

export default Video;
