import React, { Component } from 'react';
import renderHTML from 'react-render-html';

class Book extends Component {
  componentDidMount() {

  }
  
  render() {
    return (
      <div>
        {renderHTML(this.props.content)}
      </div>
    )
  }
}

export default Book;
