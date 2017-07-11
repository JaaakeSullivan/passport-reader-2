// @flow

import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

export default class Modal extends Component {


  render() {
    return (
      <div>
        {/* ===== DELETE THIS LINE ===== */}
        <Button onClick={this.props.openModal}>Open alert dialog</Button>

        <Dialog open={this.props.modal.showModal} onRequestClose={this.props.closeModal}>
          <DialogTitle>
            {this.props.modal.selectedText}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <div>Starts at postion: {this.props.modal.startPos} of #{this.props.modal.startId}.</div>
              <div>And ends at position: {this.props.modal.endPos} #{this.props.modal.endId}.</div>
              <div>The elements between are: {this.props.modal.betweenArray.toString()}</div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.closeModal} color="primary">
              Highlight
            </Button>
            <Button onClick={this.props.closeModal} color="primary">
              Take Note
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
