import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import store from '../store';
import DeleteIcon from 'material-ui-icons/Delete'
import Button from 'material-ui/Button'


const styleSheet = createStyleSheet('DeleteButton', theme => ({
  icon: {
    margin: theme.spacing.unit,
  },
}));



function DeleteButton(props) {
  const classes = props.classes;

  function handleDelete() {
    // console.log('deleting highlight')
    let matchesToDelete = props.modal.highlightSelected.matches;
    // console.log("matches to delete", matchesToDelete);
    props.deleteHighlight(matchesToDelete)

    store.dispatch({
      type: 'HIGHLIGHT_CONTENT'
    })
  }

  let ifMultiple = ''
  if (props.modal.highlightSelected.matches.length > 1) {
    ifMultiple = `(${props.modal.highlightSelected.matches.length})`;
  }

  return (
    <Button onClick={() => handleDelete()} color="primary">
      <DeleteIcon /> {ifMultiple}
    </Button>
  )
}

DeleteButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(DeleteButton);
