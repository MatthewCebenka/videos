import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  render() {
    return (
      <div className='ui container'>
        <h1>Youtube Video Search</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
