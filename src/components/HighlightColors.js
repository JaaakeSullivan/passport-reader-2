import React from 'react';
import PropTypes from 'prop-types';
import Label from 'material-ui-icons/Label';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import green from 'material-ui/colors/green';
import pink from 'material-ui/colors/pink';
import purple from 'material-ui/colors/purple';
import yellow from 'material-ui/colors/yellow';
import Button from 'material-ui/Button';
import store from '../store';


const styleSheet = createStyleSheet('HighlightColors', theme => ({
  icon: {
    margin: theme.spacing.unit,
  },
}));

const handleHighlight = (color) => {
  console.log("ready to save " + color);
}

function HighlightColors(props) {



  const classes = props.classes;

  return (
    <div>
      <Label
        className={classes.icon}
        style={{
          color: blue['A200']
        }}
        onClick={() => {handleHighlight('blue')}}
      />
      <Label
        className={classes.icon}
        style={{
          color: green['A200']
        }}
        onClick={() => {handleHighlight('green')}}
      />
      <Label
        className={classes.icon}
        style={{
          color: yellow['A200']
        }}
        onClick={() => {handleHighlight('yellow')}}
      />
      <Label
        className={classes.icon}
        style={{
          color: purple['A200']
        }}
        onClick={() => {handleHighlight('purple')}}
      />
      <Label
        className={classes.icon}
        style={{
          color: pink['A200']
        }}
        onClick={() => {handleHighlight('pink')}}
      />
    </div>
  );
}

HighlightColors.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(HighlightColors);
