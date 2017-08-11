import React from 'react';
import PropTypes from 'prop-types';
import AccessAlarmIcon from 'material-ui-icons/AccessAlarm';
import ThreeDRotation from 'material-ui-icons/ThreeDRotation';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import store from '../store';

import Label from 'material-ui-icons/Label';

import blue from 'material-ui/colors/blue';
import green from 'material-ui/colors/green';
import pink from 'material-ui/colors/pink';
import purple from 'material-ui/colors/purple';
import yellow from 'material-ui/colors/yellow';

const styleSheet = createStyleSheet('ColorSelectors', theme => ({
  icon: {
    margin: theme.spacing.unit,
  },
}));

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



  // .then(props.openHighlight(props.highlights.getHighlight(id)))

  //props.openHighlight(id)

  // TODO: Need to await to fire this in order to update highlight
  // console.log(props.highlights);

};

function ColorSelectors(props) {

  const classes = props.classes;

  return (
    <div>
      <Label
        className={classes.icon}
        style={{color: blue['A200']}}
        onClick={() => {handleHighlight(props, 'blue')}}
      />
      <Label
        className={classes.icon}
        style={{color: green['A200']}}
        onClick={() => {handleHighlight(props, 'green')}}
      />
      <Label
        className={classes.icon}
        style={{color: yellow['A200']}}
        onClick={() => {handleHighlight(props, 'yellow')}}
      />
      <Label
        className={classes.icon}
        style={{color: purple['A200']}}
        onClick={() => {handleHighlight(props, 'purple')}}
      />
      <Label
        className={classes.icon}
        style={{color: pink['A200']}}
        onClick={() => {handleHighlight(props, 'pink')}}
      />
    </div>
  );
}

ColorSelectors.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ColorSelectors);
