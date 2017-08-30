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
import handleHighlight from '../helpers/handleHighlightHelper';

// ===== MATERIAL-UI COLOR IMPORTS ===== //
import lightBlue from 'material-ui/colors/lightBlue';
import lightGreen from 'material-ui/colors/lightGreen';
import pink from 'material-ui/colors/pink';
import purple from 'material-ui/colors/purple';
import yellow from 'material-ui/colors/yellow';
import grey from 'material-ui/colors/grey';


const styles = {
  root: {
    //width: 500,
  },
};

function ColorSelect(props) {
    styles.root = {
      //backgroundColor: 'red'
    }

    const classes = props.classes;
    const color = props.highlights.getHighlight(props.modal.highlightSelected.matches[0]).color;

    const activeStyles = {
      color: props.highlights.getHighlight(props.modal.highlightSelected.matches[0]).colorCode,
      //backgroundColor: grey[400],
      boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
    }

    const shadowSettings = '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)';

    const inactiveStyles = {
      // backgroundColor: grey[200],
      // backgroundColor: '#e0e0e0'
      // boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
    }

    return (
      <BottomNavigation value={color} className={classes.root}>
        <BottomNavigationButton 
          label="Concepts" value="yellow" icon={<LabelIcon />} 
          style={color === 'yellow' ? activeStyles : {color: yellow['500'], ...inactiveStyles }} 
          onClick={() => {handleHighlight(props, 'yellow')}} 
        />
        <BottomNavigationButton 
          label="People" value="green" icon={<LabelIcon />} 
          style={color === 'green' ? activeStyles : {color: lightGreen['A700'], ...inactiveStyles}} 
          onClick={() => {handleHighlight(props, 'green')}} 
        />
        <BottomNavigationButton 
          label="Vocab" value="blue" icon={<LabelIcon />} 
          style={color === 'blue' ? activeStyles : {color: lightBlue['A100'], ...inactiveStyles}} 
          onClick={() => {handleHighlight(props, 'blue')}} 
        />
        <BottomNavigationButton 
          label="Important" value="pink" icon={<LabelIcon />} 
          style={color === 'pink' ? activeStyles : {color: pink['A100'], ...inactiveStyles}} 
          onClick={() => {handleHighlight(props, 'pink')}} 
        />
        <BottomNavigationButton 
          label="Questions" value="purple" icon={<LabelIcon />} 
          style={color === 'purple' ? activeStyles : {color: purple['A100'], ...inactiveStyles}} 
          onClick={() => {handleHighlight(props, 'purple')}}
        />       
      </BottomNavigation>
    );
  
}

ColorSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ColorSelect);