import React, { Component } from 'react';
import Book from '../components/Book';
import { addHighlights, getSelectedText, getIdAndPosition, getBetweenArray } from '../helpers/selectHelpers';

export default class BookContainer extends Component {


  handleSelect(event) {

    // ===== check for <a> ===== //
    if (event.target.parentElement.localName === 'a' ) {
      //let asideArray = this.props.asidArray;
      let id = event.target.parentElement.id;

      console.log(id);
      this.props.openAside(id);
    }

    console.log('getSelection', window.getSelection());
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

    // TODO: CREATE THE SWITCH TO TURN HIGHLIGHTS ON OR OFF -- ERROR ISSUES ARE HERE!!!

    // let onScreenDisplay = (this.props.visibility.showHighlights) ? this.props.book.displayHighlights.join('') : this.props.book.displayArray.join('');

    //let onScreenDisplay = this.props.book.displayArray.join('');
  }

  render() {

    return(
      <Book content={this.props.book.displayHighlights.join('')} handleSelect={this.handleSelect.bind(this)} />
    )
  }
}
