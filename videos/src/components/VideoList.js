import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const video = props.videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={props.onVideoSelect}
      />
    );
  });
  return (
    <div className="ui relaxed divided list">
      <h1>I have {props.videos.length} videos.</h1>
      {video}
    </div>
  );
};

export default VideoList;
