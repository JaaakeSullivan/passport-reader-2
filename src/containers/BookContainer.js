import React, { Component } from 'react';
import Book from '../components/Book';

export default class BookContainer extends Component {

  render() {
    return(
      <Book content={this.props.book.original} />
    )
  }
}
