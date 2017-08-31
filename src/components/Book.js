import React, { Component } from 'react';
import renderHTML from 'react-render-html';

function Book(props) {
  return (
    <div onClick={props.handleSelect}>
      {renderHTML(props.content)}
    </div>
  )
}

export default Book;
