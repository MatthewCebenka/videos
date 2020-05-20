import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube'

class App extends React.Component {
    
    onTermSubmit = (searchTerm) => {
        const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
        youtube.get('/search', {
            params: {
                q: searchTerm,
                part: 'snippet',
                maxResults: 5,
                key: API_KEY
            }
        });
    };


  render() {
    return (
      <div className='ui container'>
        <h1>Youtube Video Search</h1>
        <SearchBar onTermSubmit={this.onTermSubmit}/>
      </div>
    );
  }
}

export default App;
