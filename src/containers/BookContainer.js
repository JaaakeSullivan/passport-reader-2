import React, { Component } from 'react';
import Book from '../components/Book';
import { addHighlights, getSelectedText, getIdAndPosition, getBetweenArray } from '../helpers/helpers';

export default class BookContainer extends Component {


  handleSelect(event) {
    console.log(window.getSelection());
    let select = window.getSelection();

    if (select.anchorNode !== null) {
      let idAndPosition = getIdAndPosition(select);
      let selectedText = getSelectedText(select);
      let betweenArray = getBetweenArray(select);

      if (idAndPosition.startId !== idAndPosition.endId || idAndPosition.startPos !== idAndPosition.endPos) {
        this.props.openModal(selectedText, idAndPosition, betweenArray);
      }
    }


    // ===== GET START AND END POSITIONS ===== //

    // if (select.anchorNode) {
    //   console.log(getSelectedText(select));
    //   console.log(getIdAndPosition(select));
    //   console.log(getBetweenArray(select));
    // }
  }

  componentDidMount() {
    // console.log(this.props.book.original);
  }

  render() {
    return(
      <Book content={this.props.book.original} handleSelect={this.handleSelect.bind(this)} />
    )
  }
}
