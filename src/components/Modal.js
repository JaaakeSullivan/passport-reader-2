// TODO: FIX ERROR >> <div> cannot appear as a descendant of <p>. See Modal >

import React, { Component } from 'react'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import ModalDevelInfo from './ModalDevelInfo'
//import { withStyles, createStyleSheet } from 'material-ui/styles';
import HighlightColors from './HighlightColors'
import ColorSelectors from './ColorSelectors'
// import ColorTabs from './ColorTabs'
import NoteForm from './NoteForm'
import DeleteWarning from './DeleteWarning'
import DeleteIcon from 'material-ui-icons/Delete'
import DoneIcon from 'material-ui-icons/Done'
import DeleteButton from './DeleteButton'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import store from '../store';

const centerContent = {
  display: 'flex',
  justifyContent: 'space-around'
}

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
        <DeleteButton {...this.props} />
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

            <div style={centerContent}>
              <ColorSelectors {...this.props} />
            </div>

            {/* <ModalDevelInfo {...this.props} /> */}
            {this.noteForm()}
            {this.currentHighlight()}
          </DialogContent>

          {/*
          <DialogActions style={style} >
            {this.currentHighlight()}
          </DialogActions>
          */}


        </Dialog>
      </div>
    );
  }
}

export default Modal;
