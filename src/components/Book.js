import React, { Component } from 'react';
import renderHTML from 'react-render-html';

let imageFlag = false;
let imageArray = [];
let textContentArray = [];

class Book extends Component {

  // renderDisplayHighlights = this.props.contentArray.map((tag) => {
  //     console.log(tag);
  //
  //     if (tag === '<figure>') {
  //       imageFlag = true;
  //     }
  //
  //     if (tag === '</figure>') {
  //       imageFlag = false;
  //     }
  //
  //     if (imageFlag === true) {
  //       imageArray.push(tag)
  //       console.log('imagey image')
  //     } else {
  //       textContentArray.push(tag)
  //       console.log('texty text')
  //     }
  //
  //
  //     return textContentArray.join('');
  //   }
  // );

  render() {
    return (
      <div onClick={this.props.handleSelect}>
        {/*renderHTML(this.renderDisplayHighlights)*/}
        {renderHTML(this.props.content)}
      </div>
    )
  }
}

export default Book;
