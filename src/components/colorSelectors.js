import React from 'react';
import PropTypes from 'prop-types';
import AccessAlarmIcon from 'material-ui-icons/AccessAlarm';
import ThreeDRotation from 'material-ui-icons/ThreeDRotation';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import store from '../store';

import Label from 'material-ui-icons/Label';

import lightBlue from 'material-ui/colors/lightBlue';
import lightGreen from 'material-ui/colors/lightGreen';
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

};

function ColorSelectors(props) {

  const classes = props.classes;

  let blueActive, greenActive, yellowActive, purpleActive, pinkActive;

  if (props.modal.highlightSelected.value && !props.modal.highlightSelected.toDelete) {
    let colorBackground = {
      backgroundColor: '#e0e0e0',
      boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
    };

    let noBackground = '';

    switch(props.highlights.getHighlight(props.modal.highlightSelected.matches[0]).color) {
      case 'blue':
        blueActive = colorBackground;
        greenActive = noBackground;
        yellowActive = noBackground;
        purpleActive = noBackground;
        pinkActive = noBackground;
        break;
      case 'green':
        blueActive = noBackground;
        greenActive = colorBackground;
        yellowActive = noBackground;
        purpleActive = noBackground;
        pinkActive = noBackground;
        break;
      case 'yellow':
        blueActive = noBackground;
        greenActive = noBackground;
        yellowActive = colorBackground;
        purpleActive = noBackground;
        pinkActive = noBackground;
        break;
      case 'purple':
        blueActive = noBackground;
        greenActive = noBackground;
        yellowActive = noBackground;
        purpleActive = colorBackground;
        pinkActive = noBackground;
        break;
      case 'pink':
        blueActive = noBackground;
        greenActive = noBackground;
        yellowActive = noBackground;
        purpleActive = noBackground;
        pinkActive = colorBackground;
        break;
      default:
    }
  }

  const colorSelectStyle = {
    borderRadius: '100px',
    width: '40px',
    height: '40px',
    padding: '5px'
  }

  const blueStyle = {
    color: lightBlue['A200'],
    ...blueActive,
    ...colorSelectStyle
  }

  const greenStyle = {
    color: lightGreen['A200'],
    ...greenActive,
    ...colorSelectStyle
  }

  const yellowStyle = {
    color: yellow['A200'],
    ...yellowActive,
    ...colorSelectStyle
  }

  const purpleStyle = {
    color: purple['A200'],
    ...purpleActive,
    ...colorSelectStyle
  }

  const pinkStyle = {
    color: pink['A200'],
    ...pinkActive,
    ...colorSelectStyle
  }

  return (
    <div>
      <Label
        className={classes.icon}
        style={blueStyle}
        onClick={() => {handleHighlight(props, 'blue')}}
      />
      <Label
        className={classes.icon}
        style={greenStyle}
        onClick={() => {handleHighlight(props, 'green')}}
      />
      <Label
        className={classes.icon}
        style={yellowStyle}
        onClick={() => {handleHighlight(props, 'yellow')}}
      />
      <Label
        className={classes.icon}
        style={purpleStyle}
        onClick={() => {handleHighlight(props, 'purple')}}
      />
      <Label
        className={classes.icon}
        style={pinkStyle}
        onClick={() => {handleHighlight(props, 'pink')}}
      />
    </div>
  );
}

ColorSelectors.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ColorSelectors);
