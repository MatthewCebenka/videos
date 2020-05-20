import React, {Link} from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <a href='https://github.com/MatthewCebenka/videos/tree/master'>Github Repo</a>;
  }
  return (
    <div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
