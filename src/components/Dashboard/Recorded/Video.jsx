import React from 'react'
import logo from '../../../assets/logo.png'

const Video = ({video}) => {
    return (
        <div className="videoWrapper">
            <img src={logo} alt={video.uploader_name}/>
            <h4>{video.upload_title}</h4>
            <p>{video.uploader_name}</p>
        </div>
    )
}

export default Video
