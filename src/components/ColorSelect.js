// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import FolderIcon from 'material-ui-icons/Folder';
import LabelIcon from 'material-ui-icons/Label';

const styles = {
  root: {
    width: 500,
  },
};

let handleHighlight = (props, color) => {
  let time = new Date();
  let timeStamp = Date.now();
  let id = `hl-${timeStamp}`;

  // USER UPDATES AN EXISTING HIGHLIGHT COLOR
  if (props.modal.highlightSelected.value && !props.modal.highlightSelected.toDelete) {
    props.updateColor(
      props.modal.highlightSelected.matches[0],
      color
    ).then(props.highlightContent())

  // USER DELETES OVERLAPPING HIGHLIGHTS AND ADDS NEW HIGHLIGHT
  } else if (props.modal.highlightSelected.value && props.modal.highlightSelected.toDelete) {

    props.deleteHighlight(props.modal.highlightSelected.matches)

    props.addHighlight(
      id,
      props.modal.startId,
      props.modal.endId,
      props.modal.startPos,
      props.modal.endPos,
      props.modal.betweenArray,
      color,
      props.modal.selectedText,
      time,
      props.modal.note
    )

    .then(props.openHighlight(
      {
        showModal: true,
        selectedText: props.modal.selectedText,
        startId: props.modal.startId,
        startPos: props.modal.startPos,
        endId: props.modal.endId,
        endPos: props.modal.endPos,
        betweenArray: props.modal.betweenArray,
        _id: id
      }
    ))
    .then(props.highlightContent())

  // USER CREATES A NEW NON-OVERLAPPING HIGHLIGHT
  } else {
    props.addHighlight(
      id,
      props.modal.startId,
      props.modal.endId,
      props.modal.startPos,
      props.modal.endPos,
      props.modal.betweenArray,
      color,
      props.modal.selectedText,
      time,
      props.modal.note
    )
    .then(props.openHighlight(
      {
        showModal: true,
        selectedText: props.modal.selectedText,
        startId: props.modal.startId,
        startPos: props.modal.startPos,
        endId: props.modal.endId,
        endPos: props.modal.endPos,
        betweenArray: props.modal.betweenArray,
        _id: id
      }
    ))
    .then(props.highlightContent())
  }
};

function ColorSelect(props) {

    const classes = props.classes;
    const value = props.highlights.getHighlight(props.modal.highlightSelected.matches[0]).color;

    return (
      <BottomNavigation value={value}  className={classes.root}>
        <BottomNavigationButton label="Concepts" value="yellow" icon={<LabelIcon />} onClick={() => {handleHighlight(props, 'yellow')}} />
        <BottomNavigationButton label="People" value="green" icon={<LabelIcon />} onClick={() => {handleHighlight(props, 'green')}} />
        <BottomNavigationButton label="Vocab" value="blue" icon={<LabelIcon />} onClick={() => {handleHighlight(props, 'blue')}} />
        <BottomNavigationButton label="Important" value="pink" icon={<LabelIcon />} onClick={() => {handleHighlight(props, 'pink')}} />
        <BottomNavigationButton label="Questions" value="purple" icon={<LabelIcon />} onClick={() => {handleHighlight(props, 'purple')}}/>       
      </BottomNavigation>
    );
  
}

ColorSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ColorSelect);