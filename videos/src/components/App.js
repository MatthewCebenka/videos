import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = {term: ''}
    
    onTermSubmit = (searchTerm) => {
        this.setState({term: searchTerm})
    }


  render() {
    return (
      <div className='ui container'>
        <h1>Youtube Video Search</h1>
        <SearchBar onTermSubmit={this.onTermSubmit}/>
        {this.state.term}
      </div>
    );
  }
}

export default App;
