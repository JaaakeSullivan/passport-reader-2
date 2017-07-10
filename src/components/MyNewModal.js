import React, { Component } from 'react';
import { Modal, Button, DatePicker } from 'antd';


export default class MyNewModal extends Component {

  render() {
    return(
      <div>
        <Button onClick={this.props.openModal}>Open Modal</Button>

        <Modal
          title="Basic Modal"
          visible={this.props.modal.showModal}
          onOk={this.props.closeModal}
          onCancel={this.props.closeModal}
        >
          <h3>{this.props.modal.modalContent}</h3>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>

        <DatePicker  />

      </div>
    )
  }
}
