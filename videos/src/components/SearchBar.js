import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div>
            <label>Video Search</label>
            <input value='type here' type='text'/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
