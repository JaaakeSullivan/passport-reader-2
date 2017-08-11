// TODO: FIX ERROR >> <div> cannot appear as a descendant of <p>. See Modal >

import React, { Component } from 'react'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import ModalDevelInfo from './ModalDevelInfo'
//import { withStyles, createStyleSheet } from 'material-ui/styles';
import HighlightColors from './HighlightColors'
import ColorSelectors from './colorSelectors'
import NoteForm from './NoteForm'
import DeleteWarning from './DeleteWarning'

// import { isHighlightSelected } from '../helpers/selectHelpers';
import store from '../store';

class Modal extends Component {

  handleDelete() {
    // console.log('deleting highlight')
    let matchesToDelete = this.props.modal.highlightSelected.matches;
    // console.log("matches to delete", matchesToDelete);
    this.props.deleteHighlight(matchesToDelete)

    store.dispatch({
      type: 'HIGHLIGHT_CONTENT'
    })
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

  handleChangeMultiline = event => {
    console.log(event.target.value)
  };

  render() {

    return (
      <div>

        <Dialog open={this.props.modal.showModal} onRequestClose={this.props.closeModal}>
          <DialogTitle>
            {this.props.modal.selectedText}
          </DialogTitle>

          <DialogContent>
            <DeleteWarning {...this.props} />
            <ColorSelectors {...this.props} />
            <ModalDevelInfo {...this.props} />
            <NoteForm />
          </DialogContent>
          <DialogActions>
            {/*
            <Button onClick={this.props.closeModal} color="primary">
              Take Note
            </Button>

            <TextField
              id="multiline-flexible"
              label="Highlight Note"
              multiline
              rowsMax="4"
              value="Take a note here"
              onChange={this.handleChangeMultiline}
              className="none"
              margin="normal"
            />
            */}
          </DialogActions>
            {this.deleteButton()}
        </Dialog>
      </div>
    );
  }
}

export default Modal;
