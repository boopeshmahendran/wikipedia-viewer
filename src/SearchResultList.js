import React, { Component } from 'react';
import SearchResult from './SearchResult';

class SearchResultList extends Component {
  render() {
      console.log(this.props.data);
    return (
      <div>
        {this.props.data.map(resultItem => 
             <SearchResult key={resultItem.title} data={resultItem} />
         )}
      </div>
    );
  }
}

export default SearchResultList;
