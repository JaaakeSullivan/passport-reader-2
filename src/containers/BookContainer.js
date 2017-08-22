import React, { Component } from 'react';
import Book from '../components/Book';
import { getSelectedText, getIdAndPosition, getBetweenArray, isHighlightSelected } from '../helpers/selectHelpers';
// import { connect } from 'react-redux';

export default class BookContainer extends Component {


  handleSelect(event) {

    // ===== check for <a> ===== //
    if (event.target.parentElement.localName === 'a' && event.target.parentElement.className === 'aside-tag') {
      let id = event.target.parentElement.id;
      this.props.openAside(id);
    }

    console.log('getSelection', window.getSelection());
    console.log('this is this', this);
    let select = window.getSelection();

    // ===== check that valid "highlightable" text is selected -- ignore selections that start or end on aside-tags ===== //
    if (select.anchorNode !== null && select.anchorNode.className !== 'aside-tag' && select.focusNode.className !== 'aside-tag') {
      let idAndPosition = getIdAndPosition(select);
      let selectedText = getSelectedText(select);
      let betweenArray = getBetweenArray(select);

      let highlightSelected = isHighlightSelected(idAndPosition, this.props.highlights, betweenArray);


      // (select.anchorNode.parentNode.id.includes('hl') || select.focusNode.parentNode.id.includes('hl')) ? true : false;

      // TODO: ADD LOGIC HERE TO DECIDE HOW TO OPEN HIGHLIGHT

      // HANDLES A HIGHLIGHT OF NON-OVERLAPPING CONTENT
      if (idAndPosition.startId !== idAndPosition.endId || idAndPosition.startPos !== idAndPosition.endPos) {
        this.props.openModal(selectedText, idAndPosition, betweenArray, highlightSelected);

      // HANDLES A SINGLE CLICK ON A HIGHLIGHT
      } else if (select.anchorNode.parentNode.id.includes('hl')) {
        let idClicked = select.anchorNode.parentNode.id;
        let highlightClicked = (this.props.highlights.getHighlight(idClicked));
        this.props.openHighlight(highlightClicked);
        // console.log(highlightClicked);

        //this.props.openModal(selectedText, idAndPosition, betweenArray, highlightSelected);

      }
    }
  }

  componentDidMount() {

  }

  render() {

    return(
      <Book
        content={this.props.book.displayHighlights.join('')}
        contentArray={this.props.book.displayHighlights}
        handleSelect={this.handleSelect.bind(this)}
      />
    )
  }
}
