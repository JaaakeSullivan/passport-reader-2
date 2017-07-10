import React, { Component } from 'react';
import MyNewModal from '../components/MyNewModal';

export default class ModalContainer extends Component {
  render() {
    return(
      <MyNewModal {...this.props}/>
    )
  }
}
