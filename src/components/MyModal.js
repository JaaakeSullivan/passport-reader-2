import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};




export default class MyModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //modalIsOpen: false,
    };
    this.openModal = this.props.openModal.bind(this);
    this.afterOpenModal = this.props.afterOpenModal.bind(this);
    this.closeModal = this.props.closeModal.bind(this);
  }



  render() {
    return(
      <div>
        <button onClick={this.props.openModal}>Open Modal</button>
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.props.afterOpenModal}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.props.closeModal}>close</button>
          <div>{this.props.modalContent}</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    )
  }
}
