import React, { Component } from 'react';
import renderHTML from 'react-render-html';

class Book extends Component {

  render() {
    return (
      <div onClick={this.props.handleSelect}>
        {renderHTML(this.props.content)}
      </div>
    )
  }
}

export default Book;
