import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import store from '../store';
import DeleteIcon from 'material-ui-icons/Delete'
import DoneIcon from 'material-ui-icons/Done'

import Button from 'material-ui/Button'


const styleSheet = createStyleSheet('DeleteButton', theme => ({
  icon: {
    margin: theme.spacing.unit,
  },
}));

const style = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px'
};

// const buttonStyle = {
//   boxShadow: '0 3px 3px 2px rgba(0, 0, 0, .20)',
//   borderRadius: 3,
//   margin: '10px'
// }

function ModalButtons(props) {
  //const classes = props.classes;

  function handleDelete() {
    // console.log('deleting highlight')
    let matchesToDelete = props.modal.highlightSelected.matches;
    // console.log("matches to delete", matchesToDelete);
    props.deleteHighlight(matchesToDelete)

    store.dispatch({
      type: 'HIGHLIGHT_CONTENT'
    })
    store.dispatch({
      type: 'CLOSE_MODAL'
    })
  }

  let ifMultiple = ''
  if (props.modal.highlightSelected.matches.length > 1) {
    ifMultiple = `(${props.modal.highlightSelected.matches.length})`;
  }

  return (
    <div style={style}>
    <Button onClick={() => handleDelete()} raised >
      <DeleteIcon /> {ifMultiple}
    </Button>
    <Button onClick={props.closeModal} raised color="primary" >
      <DoneIcon />
    </Button>
    </div>
  )
}

ModalButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ModalButtons);
