// TODO: FIX ERROR >> <div> cannot appear as a descendant of <p>. See Modal >

import React, { Component } from 'react'
import ModalDevelInfo from './ModalDevelInfo'
//import { withStyles, createStyleSheet } from 'material-ui/styles';
import ColorSelectors from './ColorSelectors'
import ColorSelect from './ColorSelect'

// import ColorTabs from './ColorTabs'
import NoteForm from './NoteForm'
import DeleteWarning from './DeleteWarning'
import ModalButtons from './ModalButtons'
import WordsAPIContainer from '../containers/WordsAPIContainer'
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
      let colorCode = this.props.highlights.getHighlight(this.props.modal.highlightSelected.matches[0]).colorCode;

      return (
        {
          border: 'solid',
          borderColor: colorCode,
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
              <WordsAPIContainer
                word={this.props.modal.selectedText}
                showDefinition={this.props.modal.showDefinition}
                lookupWord={this.props.lookupWord}
                saveDefinition={this.props.saveDefinition}
              />
            </div>
            {/*<div style={centerContent}>
              <ColorSelectors {...this.props} />
            </div>*/}
            <div style={centerContent}>
              <ColorSelect 
                addHighlight={this.props.addHighlight}
                openHighlight={this.props.openHighlight}
                deleteHighlight={this.props.deleteHighlight}
                highlightContent={this.props.highlightContent}
                updateColor={this.props.updateColor}
                color={this.props.highlights.getHighlight(this.props.modal.highlightSelected.matches[0]).color}
                colorCode={this.props.highlights.getHighlight(this.props.modal.highlightSelected.matches[0]).colorCode}
                handleHighlight={this.props.handleHighlight}
                modal={this.props.modal}
                highlights={this.props.highlights}
              />
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
