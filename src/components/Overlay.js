// @flow

import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

export default class Overlay extends Component {


  render() {
    return (
      <div>
        {/* ===== DELETE THIS LINE ===== */}
        <Button onClick={this.props.openModal}>Open alert dialog</Button>

        <Dialog open={this.props.modal.showModal} onRequestClose={this.props.closeModal}>
          <DialogTitle>
            {this.props.modal.modalContent}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
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
