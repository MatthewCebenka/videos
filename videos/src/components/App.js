import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

    componentDidMount(){
        this.onTermSubmit('news')
    }

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
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    console.log(this.state.selectedVideo);
  };

  render() {
    return (
      <div className="ui container">
        <h1 color="red">Youtube Search</h1>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
