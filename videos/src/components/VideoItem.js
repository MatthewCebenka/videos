import React from "react";
import './VideoItem.css'

const VideoItem = (props) => {
  const title = props.video.snippet.title;
  const image = props.video.snippet.thumbnails.medium.url;
  return (
    <div className="video-item item">
      <img className="ui image" src={image} />
      <div className='content'>
        <div className='header' >{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
