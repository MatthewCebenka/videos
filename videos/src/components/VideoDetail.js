import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <div className="ui embed">
          <Loader type='Circles' color='red'/>
        </div>
        <div className="ui segment">
          <h4 className="ui header">loading</h4>
          <p>loading</p>
        </div>
      </div>
    );
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
