import React, { Component } from 'react';
import Modal from '../components/Modal';



export default class ModalContainer extends Component {

  render() {
    return(
      <Modal {...this.props}/>
    )
  }
}
