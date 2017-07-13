import React, { Component } from 'react';
import renderHTML from 'react-render-html';

class Aside extends Component {

  render() {
    return (
      <div>
        {renderHTML(this.props.content)}
      </div>
    )
  }
}

export default Aside;
