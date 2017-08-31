// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import FolderIcon from 'material-ui-icons/Folder';

import Book from 'material-ui-icons/Book'
import Settings from 'material-ui-icons/Settings'
import FormatListBulleted from 'material-ui-icons/FormatListBulleted'
import QuestionAnswer from 'material-ui-icons/QuestionAnswer'


const styles = {
  root: {
    width: '100vw',
    maxWidth: 960,
    position: 'absolute',
    bottom: 0
  },
};

class NavigationMenu extends Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const classes = this.props.classes;
    const { value } = this.state;

    return (
      <BottomNavigation value={this.props.view} onChange={this.props.handleChange} className={classes.root}>
        <BottomNavigationButton label="Settings" value={0} icon={<Settings />} />
        <BottomNavigationButton label="Book" value={1} icon={<Book />} />
        <BottomNavigationButton label="Highlights" value={2} icon={<FormatListBulleted />} />
        <BottomNavigationButton label="Activities" value={3} icon={<QuestionAnswer />} />
      </BottomNavigation>
    );
  }
}

NavigationMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationMenu);
