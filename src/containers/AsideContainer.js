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
        {/* ===== DELETE THIS LINE ===== */}
        <Button onClick={this.props.openAside}>Open Aside Dialog</Button>

        <Dialog open={this.props.aside.showAside} onRequestClose={this.props.closeAside}>
          <DialogTitle>
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
