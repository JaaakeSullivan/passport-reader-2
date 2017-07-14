import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Aside from '../components/Aside'

export default class AsideModal extends Component {

  render() {
    let asideHTML = '';
    if (this.props.aside.asideText) {
      asideHTML = this.props.book.asides[this.props.aside.asideText];
    }

    return (
      <div>
        <Dialog open={this.props.aside.showAside} onRequestClose={this.props.closeAside}>
          <DialogTitle>
          Aside Content
          </DialogTitle>
          <DialogContent>
            <Aside content={asideHTML} />
          </DialogContent>
          <DialogActions>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
