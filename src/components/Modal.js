// TODO: FIX ERROR >> <div> cannot appear as a descendant of <p>. See Modal >

import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
//import { withStyles, createStyleSheet } from 'material-ui/styles';
import HighlightColors from './HighlightColors';
import ColorSelectors from './colorSelectors';
// import { isHighlightSelected } from '../helpers/selectHelpers';

class Modal extends Component {

  // handleHighlight(color) {
  //   //e.preventDefault();
  //   console.log("ready to save");
  //   this.props.addHighlight(
  //     this.props.modal.startId,
  //     this.props.modal.endId,
  //     this.props.modal.startPos,
  //     this.props.modal.endPos,
  //     this.props.modal.betweenArray,
  //     color,
  //     this.props.modal.selectedText,
  //     this.props.modal.note
  //   );
  //   store.dispatch({
  //     type: 'HIGHLIGHT_CONTENT'
  //   })
  // }

  handleDelete() {
    console.log('deleting highlight')
    //this.props.deleteHighlight(this.props.selected)
  }

  // deleteButton() {
  //   if (isHighlightSelected) {
  //     return (
  //       <Button onClick={this.handleDelete} color="primary">
  //         Previous Highlight is Selected
  //       </Button>
  // )}};

  render() {

    return (
      <div>

        <Dialog open={this.props.modal.showModal} onRequestClose={this.props.closeModal}>
          <DialogTitle>
            {this.props.modal.selectedText}
          </DialogTitle>

          <DialogContent>
            <DialogContentText>
              Starts at postion: {this.props.modal.startPos} of #{this.props.modal.startId}.
            </DialogContentText>
            <DialogContentText>
              And ends at position: {this.props.modal.endPos} #{this.props.modal.endId}.
            </DialogContentText>
            <DialogContentText>
              The elements between are: {this.props.modal.betweenArray.toString()}
            </DialogContentText>
            <ColorSelectors {...this.props} />
          </DialogContent>
          <DialogActions>
            {/*
            <Button onClick={this.handleDelete} color="primary">
              Delete Highlight
            </Button>
            */}

            <Button onClick={this.props.closeModal} color="primary">
              Take Note
            </Button>
          </DialogActions>
          {/* {this.deleteButton()} */}
        </Dialog>
      </div>
    );
  }
}

export default Modal;
