import React, { Component } from 'react';
import Overlay from '../components/Overlay';

export default class OverlayContainer extends Component {

  render() {
    return(
      <Overlay {...this.props}/>
    )
  }
}
