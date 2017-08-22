// TODO: FIX ERROR >> <div> cannot appear as a descendant of <p>. See Modal >

import React, { Component } from 'react'
import ModalDevelInfo from './ModalDevelInfo'
//import { withStyles, createStyleSheet } from 'material-ui/styles';
import ColorSelectors from './ColorSelectors'
// import ColorTabs from './ColorTabs'
import NoteForm from './NoteForm'
import DeleteWarning from './DeleteWarning'
import ModalButtons from './ModalButtons'
import Dialog, {
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'


const centerContent = {
  display: 'flex',
  justifyContent: 'space-around'
}

// const selectedTextBorder = {
//   backgroundColor: 'red'
// }

class Modal extends Component {

  noteForm() {
    if (this.props.modal.highlightSelected.value && !this.props.modal.highlightSelected.toDelete) {
      let currentId = this.props.modal.highlightSelected.matches[0];
      let currentNote = this.props.highlights.getHighlight(currentId).note;

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
        <ModalButtons {...this.props} />
      )
    }
  }

  selectedTextBorder = () => {
    if (this.props.modal.highlightSelected.value && !this.props.modal.highlightSelected.toDelete) {
      let color = '';

      switch(this.props.highlights.getHighlight(this.props.modal.highlightSelected.matches[0]).color) {
        case 'blue': color = '#40C4FF'; break;
        case 'pink': color = '#FF4081'; break;
        case 'yellow': color = '#FFFF00'; break;
        case 'green': color = '#B2FF59'; break;
        case 'purple': color = '#E040FB'; break;
        default: break;
      }

      return (
        {
          border: 'solid',
          borderColor: color,
          borderWidth: '0px 10px 0px 10px',
          margin: '10px',
          borderRadius: '10px',
          // backgroundColor: 'rgba(0, 0, 0, .1)'
        }
      )
    }
  }

  render() {

    return (
      <div>

        <Dialog open={this.props.modal.showModal} onRequestClose={this.props.closeModal}>
          <DialogTitle style={this.selectedTextBorder()}>
            {this.props.modal.selectedText}
          </DialogTitle>

          <DialogContent>
            <div style={centerContent}>
              <ColorSelectors {...this.props} />
            </div>
            <DeleteWarning {...this.props} />
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
