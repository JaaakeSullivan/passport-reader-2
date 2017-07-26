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

function handleHighlight(props, color) {

  props.addHighlight(
    props.modal.startId,
    props.modal.endId,
    props.modal.startPos,
    props.modal.endPos,
    props.modal.betweenArray,
    color,
    props.modal.selectedText,
    props.modal.note
  );
  store.dispatch({
    type: 'HIGHLIGHT_CONTENT'
  })
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
