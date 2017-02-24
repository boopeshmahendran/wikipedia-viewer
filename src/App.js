import React, { Component } from 'react';
import $ from 'jquery';
import Search from './Search';
import SearchResultList from './SearchResultList';

class App extends Component {
  constructor() {
      super();
      this.state = {
          searchResults: []
      };
  }
  handleSearch(val) {
      let wikipediaSearchUrl = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=' + val;
      $.ajax({
          url: wikipediaSearchUrl,
          contentType: 'application/json',
          dataType: 'jsonp',
          success: function(result) {
              this.setState({
                  searchResults: result.query.search
              });
          }.bind(this)
      })
  }
  render() {
    return (
      <div className="App container">
        <h1>Wikipedia Viewer</h1>
        <a target='_blank' href='https://en.wikipedia.org/wiki/Special:Random'>Click here for a Random article</a>
        <Search onSearch={this.handleSearch.bind(this)} />
        <SearchResultList data={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
