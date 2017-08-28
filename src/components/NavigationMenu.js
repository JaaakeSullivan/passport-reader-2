// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import FolderIcon from 'material-ui-icons/Folder';
import DotsMobileStepper from './DotsMobileStepper'

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
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationButton label="Recents" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationButton label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <DotsMobileStepper />
        <BottomNavigationButton label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        <BottomNavigationButton label="Folder" value="folder" icon={<FolderIcon />} />
      </BottomNavigation>
    );
  }
}

NavigationMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationMenu);
