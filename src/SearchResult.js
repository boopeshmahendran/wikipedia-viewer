import React, { Component } from 'react';

class SearchResult extends Component {
  render() {
    var resultItem = this.props.data;
    let link = 'https://en.wikipedia.org/wiki/' + resultItem.title;
    return (
      <div className='well'>
        <h3><a target='_blank' href={link}>{resultItem.title}</a></h3>
        <h5 dangerouslySetInnerHTML={{__html: resultItem.snippet}} />
      </div>
    );
  }
}

export default SearchResult;
