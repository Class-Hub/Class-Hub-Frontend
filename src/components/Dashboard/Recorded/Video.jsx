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
      <div className='desc'>
        <h4>{video.upload_title}</h4>
        <span>{video.uspanloader_name}</span>
      </div>
    </div>
  );
};

export default Video;
