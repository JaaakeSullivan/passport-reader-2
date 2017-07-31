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
    // console.log('deleting highlight')
    let matchesToDelete = this.props.modal.highlightSelected.matches;
    for (let i=0; i<matchesToDelete.length; i++) {
      let match = matchesToDelete[i];
      console.log("match", match);
      // let indexToDelete = matchesToDelete.getIndexOfHighlight(match);
      this.props.deleteHighlight(match, this.props.highlights)
    }
  }

  deleteButton() {
    if (this.props.modal.highlightSelected.value) {
      let ifPlural = ''
      if (this.props.modal.highlightSelected.matches.length > 1) {
        ifPlural = 's'
      }

      return (
        <Button onClick={() => this.handleDelete()} color="primary">
          Delete Highlight{ifPlural}: {this.props.modal.highlightSelected.matches}
        </Button>
      )} else return null;
    };

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
            <DialogContentText>
              HighlightSelected: {this.props.modal.highlightSelected.value.toString()}
            </DialogContentText>
            <DialogContentText>
              Matches: {this.props.modal.highlightSelected.matches.toString()}
            </DialogContentText>
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
            {this.deleteButton()}
        </Dialog>
      </div>
    );
  }
}

export default Modal;
