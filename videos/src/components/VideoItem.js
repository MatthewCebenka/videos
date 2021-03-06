import React, { useReducer } from "react";
import "./VideoItem.css";

const VideoItem = (props) => {
  const title = props.video.snippet.title;
  const image = props.video.snippet.thumbnails.medium.url;
  return (
    <div
      className="video-item item"
      onClick={() => {
        props.onVideoSelect(props.video);
      }}
    >
      <img className="ui image" alt={title} src={image} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;


