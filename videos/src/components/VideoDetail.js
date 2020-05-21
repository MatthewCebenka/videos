import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <a href="https://github.com/MatthewCebenka">My Github</a>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title='video player' src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
