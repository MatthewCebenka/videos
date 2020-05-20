import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
    
    onTermSubmit = (searchTerm) => {
        
    }


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
