// TODO: FIX ERROR >> <div> cannot appear as a descendant of <p>. See Modal >

import React, { Component } from 'react'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import ModalDevelInfo from './ModalDevelInfo'
//import { withStyles, createStyleSheet } from 'material-ui/styles';
import HighlightColors from './HighlightColors'
import ColorSelectors from './colorSelectors'
import NoteForm from './NoteForm'
import DeleteWarning from './DeleteWarning'
import DeleteIcon from 'material-ui-icons/Delete'
import DeleteButton from './DeleteButton'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'

// import { isHighlightSelected } from '../helpers/selectHelpers';
import store from '../store';

class Modal extends Component {

  noteForm() {
    if (this.props.modal.highlightSelected.value && !this.props.modal.highlightSelected.toDelete) {
      let currentId = this.props.modal.highlightSelected.matches[0];
      let currentNote = this.props.highlights.getHighlight(currentId).note;

      // if (this.props.highlights.getHighlight(currentId).note === '') {
      //   currentNote = 'Take note'
      // } else currentNote = this.props.highlights.getHighlight(currentId).note;

      return (
        <div>
          <NoteForm highlightId={currentId} note={currentNote} updateNote={this.props.updateNote} />
        </div>
      )
    } else return null;
  }

  handleChangeMultiline = event => {
    console.log(event.target.value)
  };

  currentHighlight() {
    if (this.props.modal.highlightSelected.value && !this.props.modal.highlightSelected.toDelete) {
      return (
        <div>
          <Button onClick={this.props.closeModal} color="primary">
            Save
          </Button>
          <DeleteButton {...this.props} />
        </div>
      )
    }
  }


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
            {/* <ModalDevelInfo {...this.props} /> */}
            {this.noteForm()}
          </DialogContent>
          <DialogActions>
            {this.currentHighlight()}
          </DialogActions>



        </Dialog>
      </div>
    );
  }
}

export default Modal;
