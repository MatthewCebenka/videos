import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (searchTerm) => {
    const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
        part: "snippet",
        maxResults: 5,
        key: API_KEY,
      },
    });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    console.log(this.state.selectedVideo);
  };

  render() {
    return (
      <div className="ui container">
        <h1>Youtube Video Search</h1>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
